import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  baseUrl ='http://localhost:8081';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
});

  constructor(private http:HttpClient) { }
//users
  getUsersList():Observable<any>{
    return this.http.get(`${this.baseUrl}/user/list`, {headers:this.headers})
  }
  createUserDetails(reqbody:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/user/addUser`,reqbody, {headers:this.headers})
  }

  updateUserDetails(reqbody:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/user/updateUser`, reqbody, {headers:this.headers});
  }

//books
  getBooksList():Observable<any>{
    return this.http.get(`${this.baseUrl}/user/booksList`, {headers:this.headers})
  }

  createBookDetails(reqbody:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/user/addBook`, reqbody, {headers:this.headers});
  }

  updateBookDetails(reqbody:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/user/updateBooks`, reqbody, {headers:this.headers});
  }
}
