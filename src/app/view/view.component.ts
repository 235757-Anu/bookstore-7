import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute,Navigation, Params, Router } from '@angular/router';
import { Book } from '../model/book';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']

})

export class ViewComponent implements OnInit {
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