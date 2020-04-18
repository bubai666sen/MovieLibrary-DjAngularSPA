import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  constructor(private http: HttpClient) { }
  getMovies(): Observable<any>{
    return this.http.get(this.baseUrl + '/movies/',
    {headers:this.httpHeaders});
  }
  getMovie(id): Observable<any>{
    return this.http.get(this.baseUrl + '/movies/'+ id + '/',
    {headers:this.httpHeaders});
  }
  updateMovie(movie): Observable<any>{
    const movie_const = {title:movie.title, desc:movie.desc, year:parseInt(movie.year)};
    return this.http.put(this.baseUrl + '/movies/'+ movie.id + '/', movie_const ,
    {headers:this.httpHeaders});
  }
  createMovie(movie): Observable<any>{
    const movie_const = {title:movie.title, desc:movie.desc, year:parseInt(movie.year)};
    return this.http.post(this.baseUrl + '/movies/', movie_const ,
    {headers:this.httpHeaders});
  }
  deleteMovie(id): Observable<any>{
    return this.http.delete(this.baseUrl + '/movies/'+ id + '/',
    {headers:this.httpHeaders});
  }
}
