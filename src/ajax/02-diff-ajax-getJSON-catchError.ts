import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbinxxx.org/delay/1';

const manejaError = (response: AjaxError) => {
  console.warn('Error:', response.message);
  return of({
    ok: false,
    usuarios: []
  });
}

//const obs$ = ajax.getJSON(url).pipe(
  //catchError(manejaError)
//);
//const obs2$ = ajax(url).pipe(
  //catchError(manejaError)
//);

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

//obs2$.subscribe(data => console.log('data:', data));
obs$.pipe(
  catchError(manejaError)
).subscribe({
  next: data => console.log('data:', data),
  error: error => console.warn('error en subs:', error),
  complete: () => console.log('Complete')
});

