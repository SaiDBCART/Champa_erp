import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/components/commonservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-expenses',
  templateUrl: './create-expenses.component.html',
  styleUrls: ['./create-expenses.component.scss']
})
export class CreateExpensesComponent implements OnInit {

 
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
