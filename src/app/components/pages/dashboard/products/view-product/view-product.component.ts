import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/components/commonservice';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
  isNavMinimized = false;

  // barcode generator starts
  // title = 'generatebc';
  // name = 'Angular 6';

  PrintSerials = [{
    SerialId: 12345,
    Name: 'A',
    barCode: '12345A'
  },
  {
    SerialId: 585885,
    Name: 'A',
    barCode: '585885A'
  }];
  // barcode ends here
  constructor(public commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.aClickedEvent
      .subscribe((data: string) => {
        this.isNavMinimized = !this.isNavMinimized;

        console.log('Event message from Component A: ' + data);
      });
  }
}
