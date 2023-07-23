import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/user'
import { Observable } from 'rxjs';
import { Book } from './model/book';
import { Readlist } from './model/readlist';


@Injectable({
    providedIn: 'root'
})
export class ServicesService{
    
    constructor(private http: HttpClient){ }
    selectedBook: Book;
    postUser(data:any):
    Observable<Object>{
        return this.http.post('http://localhost:8000/api/v1/users/register',data);
    }
    bookArr:Book[] =[];
    

    // setSearchData(data: Book) {
    //   this.bookArr.push(data);
    // }

    // getSearchData(): Book[]{
    //   return this.bookArr;
    // }
    // viewBook(book: Book) {
    //   this.selectedBook=book;
    // }

    // getBookToView(): Book | null {
    //   return this.selectedBook;
    // }
    // getReadlist(): Observable<Readlist[]> {
    //   return this.http.get<Readlist[]>('http://localhost:8200/api/v1/readlist/readlist');
    // }
  addbook(book:Book):Observable<any>{
    console.log(book)
    return this.http.post('http://localhost:8082/api/v1/admin/books/add',book);
  }
  get():Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:8082/api/v1/admin/books');
  }
  deleteBook(isbn: number): Observable<void> {
    const url = `http://localhost:8082/api/v1/admin/books/${isbn}`;
    return this.http.delete<void>(url);
  }
  getBookDetails(isbn: number): Observable<Book> {
    const url = `http://localhost:8082/api/v1/admin/books/${isbn}`;
    return this.http.get<Book>(url);
  }
  updateBook(book: Book): Observable<any> {
    const url = `http://localhost:8082/api/v1/admin/books/${book.isbn}`;
    return this.http.put(url, book);
  }
}