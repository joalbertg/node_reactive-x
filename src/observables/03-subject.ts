import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('next: ', value),
  error: error => console.warn('error: ', error),
  complete: () => console.log('Completado')
};

const interval$ = new Observable<number>(subscriber => {
  const intervalID = setInterval(() => {
    subscriber.next(Math.random());
    console.log('Sigo emitiendo!!!');
  }, 1000);

  return () => {
    clearInterval(intervalID);
    console.log('clear interval');
  }
});

/*
 * 1- Casteo múltiple
 * 2- También es un observer
 * 3- Next, error y complete
 */

const subject$ = new Subject();

const subscription = interval$.subscribe(subject$);

//const subs1 = interval$.subscribe(console.log);
//const subs2 = interval$.subscribe(console.log);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();

  subscription.unsubscribe();
}, 3500);

