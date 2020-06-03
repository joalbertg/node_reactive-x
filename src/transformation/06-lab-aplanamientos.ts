import { fromEvent, of } from 'rxjs';
import {
  tap,
  map,
  mergeMap,
  switchMap,
  exhaustMap,
  pluck,
  catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

// Helper
const peticionHttpLogin = userPass => ajax.post(
  'https://reqres.in/api/login?delay=1',
  userPass
).pipe(
  pluck('response', 'token'),
  catchError(error => of(''))
);

// creando un formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Pasword';
inputPass.value = 'cityslicka';

submitBtn.innerText = 'Ingresar';

form.append(inputEmail, inputPass, submitBtn);
document.querySelector('body').append(form);

const submitForm$ = fromEvent<Event>(form, 'submit').pipe(
  tap(event => event.preventDefault()),
  map(event => ({
    email: event.target[0].value,
    password: event.target[1].value
  })),
  //mergeMap(peticionHttpLogin)
  //switchMap(peticionHttpLogin)
  exhaustMap(peticionHttpLogin)
);

submitForm$.subscribe(token => console.log(token));

