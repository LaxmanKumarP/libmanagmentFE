import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  baseUrl ='http://localhost:8081';

  constructor(private http:HttpClient) { }

  getUsersList():Observable<any>{
    return this.http.get(this.baseUrl +'/user/list')
  }

  getBooksList():Observable<any>{
    return this.http.get(this.baseUrl + '/user/booksList')
  }
}
