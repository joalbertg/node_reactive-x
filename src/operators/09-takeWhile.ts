import { from, fromEvent } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

const obs$ = from([1, 2, 3, 4, 5, 6]).pipe(
  takeWhile(num => num < 4, true)
).subscribe(console.log);

const click$ = fromEvent<MouseEvent>(document, 'click').pipe(
  takeWhile(({y}) => y <= 150, true)
).subscribe({
  next: val => console.log('next:', val),
  complete: () => console.log('Complete')
});

