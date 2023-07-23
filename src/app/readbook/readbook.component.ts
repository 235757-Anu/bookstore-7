import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Book } from '../model/book';

@Component({
  selector: 'app-readbook',
  templateUrl: './readbook.component.html',
  styleUrls: ['./readbook.component.css']
})
export class ReadbookComponent implements OnInit {
  book: Book;
  successMessage: string;
  isAddedToReadList: boolean = false;

  constructor(private route: ActivatedRoute,private http: HttpClient) {}

  ngOnInit() {

    this.route.queryParams.subscribe((params: Params) => {

      const bookParam = params['book'];

      if (bookParam) {

        this.book = JSON.parse(bookParam);

      }

    });

  }
  toReadList(book: Book) {
    if (this.isAddedToReadList) {
      this.isAddedToReadList = false; 
    } else {
      this.http.post('http://localhost:8200/api/v1/readlist/addtoreadlist', book).subscribe(
        (response) => {
          console.log('Book added to readlist:', response);
          this.isAddedToReadList = true; 
          this.successMessage = 'The book added successfully.';
        },
        (error) => {
          console.error('Error adding book to readlist:', error);
          this.successMessage = '';
        }
      );
    }
  }

}
