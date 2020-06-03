import { fromEvent, Observable } from 'rxjs';
import { debounceTime, pluck, map, mergeAll } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import { GithubUsers, GithubUser } from '../interfaces';

const url = 'https://api.github.com/search/users?q=';

// Helpers
const mostrarusuarios = (usuarios: GithubUser[]) => {
  console.log(usuarios);
  orderList.innerHTML = '';

  for (let usuario of usuarios) {
    const li = document.createElement('li');
    const img = document.createElement('img');

    img.src = usuario.avatar_url;

    const anchor = document.createElement('a');
    anchor.href = usuario.html_url;
    anchor.text = 'Ver página';
    anchor.target = '_blank';

    li.append(img);
    li.append(usuario.login + ' ');
    li.append(anchor);

    orderList.appendChild(li);
  }
}

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.appendChild(textInput);
body.appendChild(orderList);

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
  debounceTime<KeyboardEvent>(500),
  pluck<KeyboardEvent, string>('target', 'value'),
  map<string, Observable<GithubUsers>>(text => ajax.getJSON(`${url}${text}`)),
  mergeAll<GithubUsers>(),
  pluck<GithubUsers, GithubUser[]>('items')
).subscribe(mostrarusuarios);

