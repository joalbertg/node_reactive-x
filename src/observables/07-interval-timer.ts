import { interval, timer } from 'rxjs';

const observer = {
  next: val => console.log('next: ', val),
  complete: () => console.log('Complete')
};

const hoyEn5 = new Date(); // ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

//const obs$ = interval(1000);
//const obs$ = timer(2000);
//después de 4 seg, se comporta como un interval de 1 seg
//const timer$ = timer(4000, 1000);

const timer$ = timer(hoyEn5);

console.log('Inicio...');
//obs$.subscribe(observer);
//obs$.subscribe(observer);
timer$.subscribe(observer);
console.log('Fin.');

