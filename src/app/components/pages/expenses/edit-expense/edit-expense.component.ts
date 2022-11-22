import {  Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/components/commonservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.scss']
})
export class EditExpenseComponent implements OnInit {

 
  isNavMinimized = false;


  constructor(public commonService: CommonService, private router: Router) { }

  ngOnInit(): void {
    this.commonService.aClickedEvent
      .subscribe((data: string) => {
        this.isNavMinimized = !this.isNavMinimized;

        console.log('Event message from Component A: ' + data);
      });
  }

}
