import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/components/commonservice';
@Component({
  selector: 'app-createsale',
  templateUrl: './createsale.component.html',
  styleUrls: ['./createsale.component.scss']
})
export class CreatesaleComponent implements OnInit {
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
