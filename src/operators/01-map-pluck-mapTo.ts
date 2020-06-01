import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

//range(1, 5).pipe(
  //map<number, string>(x => (x * 10).toString())
//)
//.subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyup$.pipe(
  map(event => event.code)
);
const keyupPluck$ = keyup$.pipe(
  pluck('target', 'baseURI')
);
const keyupMapTo$ = keyup$.pipe(
  mapTo('Tecla presionada')
);

keyup$.subscribe(console.log);
keyupCode$.subscribe(code => console.log('map ', code));
keyupPluck$.subscribe(element => console.log('pluck ', element));
keyupMapTo$.subscribe(console.log);

