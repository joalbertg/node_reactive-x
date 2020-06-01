
import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('next: ', value),
  error: error => console.warn('error: ', error),
  complete: () => console.log('Completado')
};

const intervalos$ = new Observable<number>(subscriber => {
  let count = 0;
  // crear un contador 1, 2, 3, 4, 5...
  const interval = setInterval(() => {
    subscriber.next(count);
    console.log(count);
    count += 1;
  },1000);

  setTimeout(() =>{
    subscriber.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log('Intervalo destruido');
  }
});

const subs1 = intervalos$.subscribe(observer);
const subs2 = intervalos$.subscribe(observer);
const subs3 = intervalos$.subscribe(observer);

subs1.add(subs2)
     .add(subs3);

setTimeout(() => {
  subs1.unsubscribe();
  /*subs2.unsubscribe();*/
  /*subs3.unsubscribe();*/

  console.log('complete Timeout');
}, 6000);

