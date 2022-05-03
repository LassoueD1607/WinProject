import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL: string = 'http://localhost:8080/api/v1/client';

  user = new User;
  users: User[] = [];

  constructor(private http: HttpClient) {
    /*this.users = [{ "id": 1, "username": "admin", "password": "admin", "role": "ADMIN" },
    { "id": 2, "username": "Motez", "password": "lassoued", "role": "USER" },
    { "id": 3, "username": "Ahmed", "password": "bahri", "role": "USER" },
    { "id": 4, "username": "Mouhib", "password": "ruissi", "role": "USER" },
    { "id": 5, "username": "Foued", "password": "khalsi", "role": "USER" },
    { "id": 6, "username": "Wassim", "password": "trabelsi", "role": "USER" },
    { "id": 7, "username": "Imen", "password": "mzoughi", "role": "USER" },
    { "id": 8, "username": "Farah", "password": "sassi", "role": "USER" },
;*/
  }




  /*ajouterUser(prod: User) {
    this.users.push(prod);
  }*/
  ajouterUser(prod: User): Observable<User> {
    return this.http.post<User>(this.apiURL, prod, httpOptions);
  }

  /*listeUsers(): User[] {
    return this.users;
  }*/
  listeUser(): Observable<User[]> {
    return this.http.get<User[]>(this.apiURL);
  }

  /*supprimerUser(client: User) {

    const index = this.users.indexOf(client, 0);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }*/supprimerUser(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }
}
