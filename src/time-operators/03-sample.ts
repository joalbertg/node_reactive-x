import { interval, fromEvent } from 'rxjs';
import { sample, tap } from 'rxjs/operators';

const button = document.createElement('button');
button.innerHTML = 'stop';

document.querySelector('body').appendChild(button);

const interval$ = interval(1500);
const click$ = fromEvent<MouseEvent>(button, 'click');

interval$.pipe(
  tap(console.log),
  sample(click$)
).subscribe(console.log);

