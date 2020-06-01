import { fromEvent, interval, asyncScheduler } from 'rxjs';
import { throttleTime, pluck, distinctUntilChanged } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');

click$.pipe(
  throttleTime(1000)
).subscribe(console.log);

// Ejemplo 1

//interval(1000).pipe(
  //throttleTime(1000)
//).subscribe(console.log);

// Ejemplo 2
const input = document.createElement('input');

document.querySelector('body').appendChild(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
  throttleTime(1000, asyncScheduler, {
    leading: true,
    trailing: true
  }),
  pluck('target', 'value'),
  distinctUntilChanged()
).subscribe(console.log);

