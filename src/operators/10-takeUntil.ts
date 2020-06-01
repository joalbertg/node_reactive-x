import { interval, timer, fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const obs$ = interval(1000);
const stop$ = timer(6000);
const observer = {
  next: val => console.log('next:', val),
  complete: () => console.log('Complete')
};

obs$.pipe(
  takeUntil(stop$)
).subscribe(observer);

const boton = document.createElement('button');

boton.innerHTML = 'Detener Timer';
document.querySelector('body').appendChild(boton);

const counter$ = interval(1000);
const click$ = fromEvent<MouseEvent>(boton, 'click');

counter$.pipe(
  takeUntil(click$)
).subscribe({
  next: val => console.log('next:', val),
  complete: () => console.log('Complete')
});

