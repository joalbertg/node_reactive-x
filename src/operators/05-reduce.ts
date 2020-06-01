import { of, interval } from 'rxjs';
import { reduce, take, tap } from 'rxjs/operators';

const obs$ = of(1, 2, 3).pipe(
  reduce((acc, curr) => acc + curr)
).subscribe(console.log);

const numbers = [1, 2, 3, 4, 5];
const totalReducer = (acumulador: number, valorActual: number) => {
  return acumulador + valorActual;
}

const total = numbers.reduce(totalReducer, 0);
console.log(total);

interval(500).pipe(
  take(6), // completa el observable según se indique
  tap(console.log),
  reduce(totalReducer, 5)
)
.subscribe({
  next: val => console.log('next:', val),
  complete: () => console.log('Complete')
});

