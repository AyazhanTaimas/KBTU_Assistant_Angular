import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://localhost:8000';
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any>{
    return this.http.get(this.url+'/api/users/',
      {headers: this.httpHeaders});
  }

  getAllDisciplines(): Observable<any>{
    return this.http.get(this.url+'/api/disciplines/',
      {headers: this.httpHeaders});
  }

  getDisciplineDetail(cipher: string): Observable<any>{
    return this.http.get(this.url+'/api/disciplines/'+cipher, {headers: this.httpHeaders});
  }

  getDisciplineLecture(cipher: string | undefined): Observable<any>{
    return this.http.get(this.url+'/api/disciplines/'+cipher+'/lectures', {headers: this.httpHeaders});
  }
}
