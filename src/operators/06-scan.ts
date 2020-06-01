import { from } from 'rxjs';
import { scan, map, pluck } from 'rxjs/operators';

//const numbers = [1, 2, 3, 4];

//from(numbers).pipe(
  //scan((acc, curr) => acc + curr, 0)
//).subscribe(console.log);

// Redux
interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}

const user: Usuario[] = [
  { id: 'Joa', autenticado: false, token: null },
  { id: 'Joa', autenticado: true, token: 'ABC' },
  { id: 'Joa', autenticado: true, token: 'ABC123' }
]

const state$ = from(user).pipe(
  scan<Usuario>((acc, curr) => {
    return { ...acc, ...curr }
  }, { edad: 31 })
)//.subscribe(console.log)

const id$ = state$.pipe(
  //map(state => state)
  //map(state => state.id)
  pluck('id')
).subscribe(console.log)

