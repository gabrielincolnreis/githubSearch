import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GithubServiceService {
  constructor(private http: HttpClient) {}

  findUser(userName: string) {
    return this.http.get(`https://api.github.com/users/${userName}`).pipe(
      map((response: any) => response),
      catchError((err) => {
        console.log(err);
        return Observable.throw(err);
      })
    );
  }

  findRepoByUser(userName: string) {
    return this.http.get(`https://api.github.com/users/${userName}/repos`).pipe(
      map((response: any) => response),
      catchError((err) => {
        console.log(err);
        return Observable.throw(err);
      })
    );
  }
}
