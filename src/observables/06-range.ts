import { range, asyncScheduler } from 'rxjs';

//const obs$ = range(5);
//const obs1$ = range(1, 5);
const obs2$ = range(1, 5, asyncScheduler);

console.log('Inicio');
//const subs = obs$.subscribe(console.log);
const subs = obs2$.subscribe(console.log);
console.log('Fin');

