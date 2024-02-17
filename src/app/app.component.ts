import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'filter-pass-fail';



  // myData: FormGroup;
  listData: any[];
  passedData: any[] = [];
  failedData: any[] = [];

  constructor() {
    this.listData = [
      {
        fname: 'ranjith',
        age: 31,
        phone: 9524414213,
        active: 'yes'
      },
      {
        fname: 'dinesh',
        age: 22,
        phone: 987654321,
        active: 'inactive'
      },
      {
        fname: 'ranjith',
        age: 31,
        phone: 9524414213,
        active: 'yes'
      },
      {
        fname: 'dinesh',
        age: 22,
        phone: 987654321,
        active: 'no'
      },
      {
        fname: 'Hari',
        age: 22,
        phone: 987654321,
        active: 'abc'
      },
      {
        fname: 'Hari poison',
        age: 22,
        phone: 987654321,
        active: 'yes'
      },
    ];
  }

  filteringArray(index: number, status: any) {
    
    if (status === 'pass'){
      const passedItem = this.listData.splice(index, 1)[0];
      this.passedData.push(passedItem);
    }
    else{
      const failedItem = this.listData.splice(index, 1)[0];
      this.failedData.push(failedItem);
    }
  }

  

  // pass(index: number) {
  //   const passedItem = this.listData.splice(index, 1)[0];
  //   this.passedData.push(passedItem);
  // }

  // fail(index: number) {
  //   const failedItem = this.listData.splice(index, 1)[0];
  //   this.failedData.push(failedItem);
  // }
}
