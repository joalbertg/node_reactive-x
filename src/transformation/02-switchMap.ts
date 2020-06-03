import { fromEvent } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1?arg=';

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');

body.appendChild(textInput);

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
  pluck('target', 'value'),
  switchMap(texto => ajax.getJSON(url + texto))
).subscribe(console.log);

