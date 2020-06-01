import { from, fromEvent } from 'rxjs';
import { first, map, tap, take } from 'rxjs/operators';

const obs$ = from([1, 2, 3, 22, 50, 6, 7]);

obs$.pipe(
  first(x => x >= 10)
).subscribe(console.log);

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
  //take(1)
  //first()

  tap(() => console.log('tap')),
  first<MouseEvent>(({clientY}) => clientY >= 150)
).subscribe({
  next: val => console.log('next:', val),
  complete: () => console.log('Complete')
});

