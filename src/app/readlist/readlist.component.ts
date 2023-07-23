import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-readlist',
  templateUrl: './readlist.component.html',
  styleUrls: ['./readlist.component.css']
})
export class ReadlistComponent implements OnInit {
  books: Book[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getReadlist();
  }

  getReadlist() {
    this.http.get<Book[]>('http://localhost:8200/api/v1/readlist/readlist').subscribe(
      (data: Book[]) => {
        this.books = data;
      },
      (error) => {
        console.error('Error retrieving readlist:', error);
      }
    );
  }

}
