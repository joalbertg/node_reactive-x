import { of } from 'rxjs';
import { take, tap } from 'rxjs/operators';

const numeros$ = of(1, 2, 3, 4, 5).pipe(
  tap(num => console.log('num:', num))
);

numeros$.pipe(
  tap(t => console.log('tap:', t)),
  take(3)
).subscribe({
  next: val => console.log('next:', val),
  complete: () => console.log('Complete')
});

