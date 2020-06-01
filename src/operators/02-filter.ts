import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

//range(1, 10).pipe(
  //filter(x => x % 2 === 1)
//).subscribe(console.log);

//range(0, 10).pipe(
  //filter((x, index) => {
    //console.log('emite: ', index);
    //return x % 2 === 1
  //})
//).subscribe(console.log);

interface Personaje {
  tipo: string,
  nombre: string
}

const personajes: Personaje[] = [
  {
    tipo: 'heroe',
    nombre: 'Batman'
  },
  {
    tipo: 'heroe',
    nombre: 'Robin'
  },
  {
    tipo: 'villano',
    nombre: 'Joker'
  }
];

from(personajes).pipe(
  filter(obj => obj.tipo === 'heroe')
).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
  map(event => event.code),
  filter(code => code === 'Enter' )
);

keyup$.subscribe(console.log);

