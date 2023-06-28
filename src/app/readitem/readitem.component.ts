import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Book } from '../model/book';

@Component({
  selector: 'app-readitem',
  templateUrl: './readitem.component.html',
  styleUrls: ['./readitem.component.css']
})
export class ReaditemComponent implements OnInit {
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
