import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../commonservice';
import { submenu } from './Model/header.model';
import { Headerservice } from './Service/header.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isNavMinimized = false;
  ShowDropdown = false;
  menudata: any;
  current_dropdown = 0
  searchText: any;

  constructor(public commonService: CommonService, public headerservice: Headerservice) {

    this.headerservice.getmenudata().subscribe((result) => {
      console.log(result);
      this.menudata = result.data;
      for (var i = 0, len = this.menudata.length; i < len; i++) {
        this.menudata[i].submenu = [];
        console.log(this.menudata[i].Id = this.menudata.submenu[i].MenuId);

        for (var j = 0; j < submenu.length; j++) {
          if (this.menudata.submenu[j].MenuId == this.menudata[i].Id) {
            this.menudata[i].submenu.push(this.menudata.submenu[j])
            console.log(this.menudata[i].submenu.push(this.menudata.submenu[j]));

          }
        }
      }
      console.log(this.menudata.Id);
      console.log(this.menudata.submenu)

    })


  }

  ngOnInit(): void {
  }

  onNavMinimize() {
    this.isNavMinimized = !this.isNavMinimized;
    this.commonService.AClicked('Component A is clicked!!');
  }
  OnShowDropdown(MenuId: any) {
    if (this.current_dropdown == MenuId) {
      this.current_dropdown = 0;
    } else {
      this.current_dropdown = MenuId
    }
  }

}