import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../commonservice';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isNavMinimized = false;
  constructor(public commonService: CommonService) { }

  ngOnInit(): void {
  }

  onNavMinimize() {
    this.isNavMinimized = !this.isNavMinimized;
    this.commonService.AClicked('Component A is clicked!!');
  }
}
