import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/components/commonservice';
@Component({
  selector: 'app-viewsales',
  templateUrl: './viewsales.component.html',
  styleUrls: ['./viewsales.component.scss']
})
export class ViewsalesComponent implements OnInit {
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
