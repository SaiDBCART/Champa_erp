import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/components/commonservice';
@Component({
  selector: 'app-editsales',
  templateUrl: './editsales.component.html',
  styleUrls: ['./editsales.component.scss']
})
export class EditsalesComponent implements OnInit {
  isNavMinimized = false;
  constructor(public commonservice: CommonService) { }

  ngOnInit(): void {
    this.commonservice.aClickedEvent
      .subscribe((data: string) => {
        this.isNavMinimized = !this.isNavMinimized;

        console.log('Event message from Component A: ' + data);
      });

  }

}
