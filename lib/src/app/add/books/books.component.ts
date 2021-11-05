import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {AddService} from '../services/add.service'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  addBookForm : FormGroup;

  constructor(private addservice:AddService,private hb:FormBuilder) { }

  ngOnInit(): void {
    this.addBookForm = this.hb.group({
      'name':new FormControl('',Validators['required']),
      'pageno':new FormControl('',Validators['required']),
      'author':new FormControl('',Validators['required']),
      'category':new FormControl('',Validators['required']),
      'price':new FormControl('',Validators['required']),
      'publication':new FormControl('',Validators['required']),
      'avilablenumber':new FormControl('',Validators['required'])
    });
  }

  submitForm(){
    this.addservice.addTotalBooks(this.addBookForm.value).subscribe(res => {
      console.log(res);
    }, 
    err =>{
      console.log(err);
    })
    this.addBookForm.reset();
  }

}
