import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Totalbooks} from '../../admin/models/totalbooks';
import {ViewService} from '../service/view.service'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  totalBooks$ : Observable<Totalbooks[]>;

  constructor(private viewservice:ViewService) { }

  ngOnInit(): void {
    this.totalBooks$ =  this.viewservice.getTotalBooks();
  }

}
