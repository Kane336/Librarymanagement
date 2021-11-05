import { Component, OnInit } from '@angular/core';
import {Authors} from '../../admin/models/authors';
import { Observable } from 'rxjs';
import {ViewService} from '../service/view.service'

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authors$ : Observable<Authors[]>

  constructor(private viewservice:ViewService) { }

  ngOnInit(): void {
    this.authors$ = this.viewservice.getAuthors();
  }

}
