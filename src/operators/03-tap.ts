import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const numeros$ = range(1, 5);

const numberTap$ = numeros$.pipe(
  tap(x => {
    console.log('antes', x)
    return 100; // no se ejecuta
  }),
  map(x => (x * 10).toString()),
  tap({
    next: val => console.log('despues', val),
    complete: () => console.log('Completado!')
  })
);

numberTap$.subscribe(val => console.log('subs', val));

