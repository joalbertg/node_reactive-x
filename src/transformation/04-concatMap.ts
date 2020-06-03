import { interval, fromEvent } from 'rxjs';
import { take, concatMap } from 'rxjs/operators';

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
  concatMap(() => interval$)
).subscribe(console.log);

