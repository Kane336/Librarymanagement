import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {AdminService} from '../services/admin.service'

@Component({
  selector: 'app-issuebook',
  templateUrl: './issuebook.component.html',
  styleUrls: ['./issuebook.component.css']
})
export class IssuebookComponent implements OnInit {

  issueBookForm : FormGroup

  constructor(private adminservice:AdminService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.issueBookForm = this.fb.group({
      'name':new FormControl('',Validators['required']),
      'pageno':new FormControl('',Validators['required']),
      'author':new FormControl('',Validators['required']),
      'category':new FormControl('',Validators['required']),
      'rollno':new FormControl('',Validators['required']),
      'fromdate':new FormControl('',Validators['required']),
      'todate':new FormControl('',Validators['required']),
    })
  }

  formSubmit(){
    this.adminservice.issueBooks(this.issueBookForm.value).subscribe(res => {
      console.log(res);
      this.issueBookForm.reset();
    },
    err => {
      console.log(err);
    })
  }

}
