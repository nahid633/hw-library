import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {
bookForm: FormGroup;
newCategory;
showAddCategory = false;
  constructor() { }

  ngOnInit() {
    this.bookForm = new FormGroup({
      author: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      language: new FormControl('', [Validators.required]),
      image: new FormControl('', []),
      category: new FormControl('', [Validators.required]),
      pages: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      pdf: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    console.log(this.bookForm.value);
  }

  onAddCategory() {
    console.log(this.newCategory);
  }
}
