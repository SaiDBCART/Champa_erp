import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/components/commonservice';
@Component({
  selector: 'app-editwarehouse',
  templateUrl: './editwarehouse.component.html',
  styleUrls: ['./editwarehouse.component.scss']
})
export class EditwarehouseComponent implements OnInit {
  isNavMinimized = false;
  constructor(public commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.aClickedEvent
      .subscribe((data: string) => {
        this.isNavMinimized = !this.isNavMinimized;

        console.log('Event message from Component A: ' + data);
      });
  }

}
