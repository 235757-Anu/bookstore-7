import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Book } from '../model/book';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-updateitem',
  templateUrl: './updateitem.component.html',
  styleUrls: ['./updateitem.component.css']
})
export class UpdateitemComponent implements OnInit {
  book: Book;
  successMessage: string;

  constructor(private route: ActivatedRoute, private service: ServicesService,private router:Router) { }

  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params && params['book']) {
        this.book = JSON.parse(params['book']);
      }
    });
  }

  updateBook(): void {
    this.service.updateBook(this.book).subscribe(
      (response: any) => {
        console.log('Book updated successfully:', response);
        this.successMessage = 'The book updated successfully.';
        setTimeout(() => {
          this.router.navigate(['/update']);
        }, 2000);
      },
      (error: any) => {
        console.error('Error updating book:', error);
        this.successMessage = '';
      }
    );
  }

}

