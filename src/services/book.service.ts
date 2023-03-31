/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from 'src/models/book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private refetchSubject = new BehaviorSubject<Book []>([]);

  constructor(private http: HttpClient) {}

  baseUrl = environment.baseUrl;

  public refetch(): Observable<Book[]> {
    return this.refetchSubject.asObservable();
  }

  public getBooks(): Observable<Book[]> {

    return this.http.get<Book[]>(this.baseUrl + '/api/book');

  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public addBook(book: any): Observable<Book> {


    return this.http.post<Book>(this.baseUrl + '/api/book' , book)
    .pipe(tap(() => this.refetchSubject.next([])));

  }

  public deleteBook(bookId: string): Observable<Book> {

    return this.http.delete<Book>(`${this.baseUrl + '/api/book'}/${bookId}`)
    .pipe(tap(() => this.refetchSubject.next([])));
  }



}
