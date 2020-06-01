import { asyncScheduler } from 'rxjs';

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const me = {
  name: 'Joalbert',
  age: 31
};

const saludar = () => console.log('Hola Mundo');
const saludar2 = obj => console.log(`Hola ${obj.name}`);

//asyncScheduler.schedule(saludar, 2000);
//asyncScheduler.schedule(saludar2, 2000, me);

const subs = asyncScheduler.schedule(function(state) {
  console.log(state);
  this.schedule(state + 1, 1000);
}, 2000, 0);

//setTimeout(() => {
  //subs.unsubscribe();
//}, 6000);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);

