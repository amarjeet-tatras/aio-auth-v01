import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  profile(username, password){
    return this.http.post<any>('http://localhost:4000/users/current', { username, password })
        .pipe(map(user => {            
            return user;
        }));
  }
}
