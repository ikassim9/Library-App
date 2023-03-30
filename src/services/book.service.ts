/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from 'src/models/book';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {

  }

  baseUrl = environment.baseUrl;

  public getBooks(): Observable<Book[]> {

    return this.http.get<Book[]>(this.baseUrl + '/api/book');

  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public addBook(book: any): Observable<Book> {


    return this.http.post<Book>(this.baseUrl + '/api/book' , book);

  }

}
