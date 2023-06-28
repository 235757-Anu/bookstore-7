import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../model/book';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css']
})
export class ListbookComponent {

  isPopupVisible: boolean =false;

  @Input() books:Book[];

  book: Book;
  flag:number;
  successMessage: string;
  errorMessage: string;

  constructor(private service: ServicesService, private router: Router, private http: HttpClient) { }

  toAdd(book: Book) {
    book.author = book.author[0];
    console.log(book);
    this.service.addbook(book).subscribe(
      (response: any) => {
        console.log('Data sent successfully:', response);
        console.log('Data sent successfully:', response);
        this.successMessage = 'Successfully added.';
        setTimeout(() => {
          this.successMessage = '';
        }, 1500);
      },
      (error) => {
        console.error('Error sending data', error);
        this.errorMessage = 'The book already exists.';
        setTimeout(() => {
          this.errorMessage = '';
        }, 1500); 
      }
    );
  }

  toView(book: Book) {
    console.log(book);
    const queryParams = { book: JSON.stringify(book) };
    this.router.navigate(['/view'], { queryParams });
  }
  // constructor(private service: ServicesService, private router: Router,private http: HttpClient) { }

  // toAdd(book: Book) {
  //   book.author=book.author[0]
  //   console.log(book)
  //   this.service.addbook(book).subscribe(
  //     (response:any) => {
  //       console.log('Data sent successfully:',response);
  //       this.isPopupVisible=true;
  //     },
  //     (error) => {
  //       console.error('Error sending data', error);
  //     }
  //   );
  // }

  // toView(book: Book) {
  //   console.log(book);
  //   const queryParams = { book: JSON.stringify(book) };
  //   this.router.navigate(['/view'], { queryParams });
  // }
  // closePopup(){
  //   this.isPopupVisible=false;
  // }
}
