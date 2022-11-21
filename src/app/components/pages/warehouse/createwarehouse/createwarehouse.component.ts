import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/components/commonservice';

export interface PermissionUser {
  Name: string;
  Role: string;

}
const Permissionlist: PermissionUser[] =
  [
    {
      Name: "Sai",
      Role: "Admin"
    },
    {
      Name: "Keerthana",
      Role: "Staff"
    },
    {
      Name: "Janani",
      Role: "Admin"
    },
    {
      Name: "Kavitha",
      Role: "Staff"
    },
    {
      Name: "Pavithra",
      Role: "Admin"
    },
    {
      Name: "Jagam",  
      Role: "Staff"
    },
    {
      Name: "Hema",
      Role: "Admin"
    }
  ]
@Component({
  selector: 'app-createwarehouse',
  templateUrl: './createwarehouse.component.html',
  styleUrls: ['./createwarehouse.component.scss']
})
export class CreatewarehouseComponent implements OnInit {
  isNavMinimized = false;
  options = false;
  showModeldiv = true;
  showpermission = false;
  public selecteduser: any;
  constructor(public commonService: CommonService) {
    this.selecteduser = Permissionlist;
  }

  ngOnInit(): void {
    this.commonService.aClickedEvent
      .subscribe((data: string) => {
        this.isNavMinimized = !this.isNavMinimized;

        console.log('Event message from Component A: ' + data);
      });
  }
  OnSaveWarehouse() {
    alert("Successfully Saved!!")
  }
  OnCancelSale() { }
  OnClickEdit() {
    this.showpermission = !this.showpermission;
  }
  closeList() {
    this.showModeldiv = false;
  }
}


