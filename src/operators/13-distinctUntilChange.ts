import { of, from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

of<number|string>(1, 1, '1', 2, 3, 3, 4, 1).pipe(
  distinctUntilChanged()
).subscribe(console.log);

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  {
    nombre: 'Megaman'
  },
  {
    nombre: 'Megaman'
  },
  {
    nombre: 'Zero'
  },
  {
    nombre: 'Zero'
  },
  {
    nombre: 'Dr. Willy'
  },
  {
    nombre: 'X'
  },
  {
    nombre: 'Megaman'
  }
];

from<Personaje[]>(personajes).pipe(
  distinctUntilChanged((ant, act) => ant.nombre === act.nombre)
).subscribe(console.log);

