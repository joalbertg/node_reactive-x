import { interval, fromEvent } from 'rxjs';
import { takeUntil, tap, skip } from 'rxjs/operators';

const observer = {
  next: val => console.log('next:', val),
  complete: () => console.log('Complete')
};

//interval(1000).pipe(
  //skip(3)
//).subscribe(observer);

const boton = document.createElement('button');

boton.innerHTML = 'Detener Timer';
document.querySelector('body').appendChild(boton);

const counter$ = interval(1000);
const click$ = fromEvent<MouseEvent>(boton, 'click').pipe(
  tap(() => console.log('Tap antes de skip')),
  skip(1),
  tap(() => console.log('Tap después de skip'))
);

counter$.pipe(
  takeUntil(click$)
).subscribe(observer);

