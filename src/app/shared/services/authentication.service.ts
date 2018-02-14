import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  // headers
  public token: string;
  private url = 'http://localhost:4040/apiv1/auth/login';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) {
    // Atribui o token se ele estiver salvo no local storage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(username, password): Observable<boolean> {
    let body = JSON.stringify({
      username: username,
      password: password
    });
    return this.http.post(this.url, body, this.options)
      .map((res: Response) => {
        // login successful if there's a jwt token in the response   
        let token = res.json() && res.json().token;
        if (token) {
          this.token = token;
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }))
          return true
        } else {
          return false
        }
      })
  }
  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser')
  }


}