import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../model/book';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
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

  toDelete(book: Book): void {
    const confirmation = confirm('Are you sure you want to delete this book?');
    if (confirmation) {
      this.service.deleteBook(book.isbn).subscribe(
        () => {
          console.log('Book deleted:', book);
          this.getBooks();
        },
        (error) => {
          console.error('Error deleting book:', error);
        }
      );
    }
  }

}
