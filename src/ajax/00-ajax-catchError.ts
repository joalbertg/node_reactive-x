import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { pluck, catchError } from 'rxjs/operators';

// url con error
//const url = 'https://api.github.com/userxxxs?per_page=5';
const url = 'https://api.github.com/users?per_page=5';

//const fetchPromesa = fetch(url);
//const manejaErrores = (response: Response) => {
  //if (!response.ok) {
    //throw new Error(response.statusText);
  //}
  //return response;
//}

// no se puede manejar el error, no llega al catch porque el response tiene ok: false
//fetchPromesa.then(resp => resp.json())
//.then(data => console.log('Data:', data))
//.catch(error => console.warn('Error en usuarios', error));

// solucionando con fetch
//fetchPromesa.then(resp => {
  //manejaErrores(resp);
  //return resp.json()
//})
//.then(data => console.log('Data:', data))
//.catch(error => console.warn('Error en usuarios', error));

// AjaxError es una interface
const atrapaError = (error: AjaxError) => {
  console.warn('Error en:', error);
  return of([]);
}

ajax(url).pipe(
  pluck('response'),
  catchError(atrapaError)
).subscribe(users => console.log('Usuarios:', users));

