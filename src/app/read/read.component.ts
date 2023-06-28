import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../model/book';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  books: Book[];

  constructor(private http: HttpClient,private router: Router,private service:ServicesService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.service.get().subscribe(
      (response:Book[]) => {
        this.books = response;
      },
      (error) => {
        console.error('Error retrieving book data:', error);
      }
    );
  }

  toView(book: Book): void {
    console.log(book);
    const queryParams = { book: JSON.stringify(book) };
    this.router.navigate(['/readitem'], { queryParams });
  }
}