import { interval } from 'rxjs';
import { scan, startWith, takeWhile, map, take } from 'rxjs/operators';

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() =>{

    const inicio = 7;
    const countdown$ = interval(700).pipe(
        //startWith(inicio),
        //scan(acc => acc - 1),
        //takeWhile(val => val >= 0)

        map(val => inicio - val),
        take(inicio + 1)
    );

    // No tocar esta línea ==================
    countdown$.subscribe( console.log ); // =
    // ======================================

})();

