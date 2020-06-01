import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';

of<number|string>(1, 1, '1', 2, 3, 3, 4, 1).pipe(
  distinct()
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
    nombre: 'Dr. Willy'
  },
  {
    nombre: 'X'
  },
  {
    nombre: 'Zero'
  },
];

from<Personaje[]>(personajes).pipe(
  distinct(obj => obj.nombre)
).subscribe(console.log);

