import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:4200/login'; // URL для вашего эндпоинта аутентификации

  constructor(private http: HttpClient) { }

  signIn(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post<any>(this.apiUrl, body);
  }

  // GET запрос на получение пользователей
  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // POST запрос для добавления нового пользователя (регистрация)
  registerUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  // DELETE запрос для удаления пользователя
  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${userId}`);
  }
}
