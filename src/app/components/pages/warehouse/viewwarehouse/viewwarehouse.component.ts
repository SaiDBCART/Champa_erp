import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/components/commonservice';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  category: string;
  img: string;
  unit: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  { category: "3", name: 'Camera', img: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', unit: 'piece' },
  { category: "1", name: 'HeadSet', img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80', unit: 'piece' }, { category: "4", name: 'Bat', img: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', unit: 'piece' },
  { category: "10", name: 'Flower Pot', img: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', unit: 'piece' }, { category: "2", name: 'Bottles', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPirVk88ynt3dkKR3Qmb911Z_toWqPqGWoilYMjc9a&s', unit: 'piece' },
  { category: "9", name: 'Sunglasses', img: 'https://cdn.pixabay.com/photo/2020/05/26/09/32/product-5222398_960_720.jpg', unit: 'piece' },
  { category: "1", name: 'Shoe', img: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', unit: 'piece' },
  { category: "1", name: 'Watch', img: 'https://burst.shopifycdn.com/photos/wrist-watches.jpg?width=1200&format=pjpg&exif=1&iptc=1', unit: 'piece' },
];
@Component({
  selector: 'app-viewwarehouse',
  templateUrl: './viewwarehouse.component.html',
  styleUrls: ['./viewwarehouse.component.scss']
})
export class ViewwarehouseComponent implements OnInit {
  isNavMinimized = false;
  displayedColumns: string[] = ['product', 'quantity',];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(public commonService: CommonService, private _liveAnnouncer: LiveAnnouncer,) { }

  ngOnInit(): void {
    this.commonService.aClickedEvent
      .subscribe((data: string) => {
        this.isNavMinimized = !this.isNavMinimized;

        console.log('Event message from Component A: ' + data);
      });
  }
  @ViewChild(MatSort) sort: MatSort | any;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
