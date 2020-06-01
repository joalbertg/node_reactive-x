import { fromEvent } from 'rxjs';

/*
 * Eventos del DOM
 */

const obs1$ = fromEvent<MouseEvent>(document, 'click');
const obs2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
  next: val => console.log(val)
};

//para consultar el type del evento
//const subs1 = obs1$.subscribe(observer);
//const subs2 = obs2$.subscribe(observer);
const subs1 = obs1$.subscribe(({x, y}) => {
  console.log(`(${x} ${y})`);
});
const subs2 = obs2$.subscribe(({key}) => {
  console.log('key: ' + key);
});

