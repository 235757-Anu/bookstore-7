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
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

    this.route.queryParams.subscribe((params: Params) => {

      const bookParam = params['book'];

      if (bookParam) {

        this.book = JSON.parse(bookParam);

      }

    });

  }

}
