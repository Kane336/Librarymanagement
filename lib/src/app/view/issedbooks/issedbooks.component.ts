import { Component, OnInit } from '@angular/core';
import {Student} from '../../student/models/student'
import { Observable } from 'rxjs';
import {ViewService} from '../service/view.service';

@Component({
  selector: 'app-issedbooks',
  templateUrl: './issedbooks.component.html',
  styleUrls: ['./issedbooks.component.css']
})
export class IssedbooksComponent implements OnInit {

  issedBooks$ : Observable<Student[]>

  constructor(private viewsevice:ViewService) { }

  ngOnInit(): void {
    this.issedBooks$ = this.viewsevice.getIssuedBooks();
  }

}
