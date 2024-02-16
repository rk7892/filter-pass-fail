import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'filter-pass-fail';

  myData: FormGroup;
  listData: any[];
  passedData: any[] = [];
  failedData: any[] = [];

  constructor (private formBuilder: FormBuilder) {
    this.listData = [
      {
        fname: "ranjith",
        age: 31,
        phone: 9524414213
      },
      {
        fname: "dinesh",
        age: 22,
        phone: 987654321
      },{
        fname: "ranjith",
        age: 31,
        phone: 9524414213
      },
      {
        fname: "dinesh",
        age: 22,
        phone: 987654321
      }
    ];
    this.myData = this.formBuilder.group({
      fname: [''],
      age: [],
      phone: [],
    });
  }

  pass(index: number) {
    const passedItem = this.listData.splice(index, 1)[0];
    this.passedData.push(passedItem);
  }

  fail(index: number) {
    const failedItem = this.listData.splice(index, 1)[0];
    this.failedData.push(failedItem);
  }
}
