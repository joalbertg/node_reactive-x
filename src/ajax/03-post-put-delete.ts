import { ajax } from 'rxjs/ajax';
import { pluck, map } from 'rxjs/operators';

const url = 'https://httpbin.org/delay/1';

// post, put, delete(sin el body)
//ajax.post(url, {
  //id: 1,
  //nombre: 'Joalbert'
//}, {
  //'Content-Type': 'application/json',
  //'mi-token': 'ABC123'
//}).subscribe(console.log);

ajax({
  url,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'mi-token': 'ABC123'
  },
  body: {
    id: 1,
    nombre: 'Joalbert'
  }
}).pipe(
  pluck('response', 'data'),
  map(val => JSON.parse(val))
).subscribe(console.log);
//}).subscribe(val => console.info(JSON.parse(val.response.data)));

