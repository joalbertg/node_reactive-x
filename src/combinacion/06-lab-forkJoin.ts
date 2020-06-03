import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const GITHUB_API_URL = 'http://api.github.com/users';
const GITHUB_USER = 'joalbertg';

forkJoin({
  usuario: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
  repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repo12345s`).pipe(
    catchError(error => of([]))
  ),
  gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`)
}).pipe(
  catchError(error => of(error))
).subscribe(console.log);

