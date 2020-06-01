import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: valor => console.log('[next]: ', valor),
  error: error => console.warn('[error]: ', error),
  complete: () => console.log('Completado')
};

//const obs$ = Observable.create();
const obs$ = new Observable<string>(subs => {
  subs.next('Hola');
  subs.next('Mundo');
  subs.next('Hola');
  subs.next('Mundo');

  //throw 'Error!!!';

  subs.complete();

  subs.next('Hola');
  subs.next('Mundo');
});

//obs$.subscribe(console.log);
/*obs$.subscribe(*/
  //valor => console.log('next: ', valor),
  //error => console.warn('error: ', error),
  //() => console.log('Completado')
/*);*/

obs$.subscribe(observer);

