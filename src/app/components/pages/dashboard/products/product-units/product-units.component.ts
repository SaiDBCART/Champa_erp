import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/components/commonservice';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  shortname: string;
  baseunit: string; createdon: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Orange', shortname: "apl", baseunit: "kilogram", createdon: '11/11/2022' }, { name: 'jacket', shortname: "apl", baseunit: "kilogram", createdon: '11/11/2022' },
  { name: 'sunglases', shortname: "apl", baseunit: "piece", createdon: '11/11/2022' },
  { name: 'laptop', shortname: "apl", baseunit: "meter", createdon: '11/11/2022' },
  { name: 'notebook', shortname: "apl", baseunit: "piece", createdon: '11/11/2022' },
  { name: 'bottles', shortname: "apl", baseunit: "piece", createdon: '11/11/2022' },
  { name: 'mobile', shortname: "apl", baseunit: "piece", createdon: '11/11/2022' },
  { name: 'wheat', shortname: "apl", baseunit: "kilogram", createdon: '11/11/2022' },
  { name: 'juice', shortname: "apl", baseunit: "litre", createdon: '11/11/2022' },
];


@Component({
  selector: 'app-product-units',
  templateUrl: './product-units.component.html',
  styleUrls: ['./product-units.component.scss']
})
export class ProductUnitsComponent implements OnInit {
  isNavMinimized = false;
  ShowFilter = false;
  ShowUnitModal = false;
  ShowModal = false;
  displayedColumns: string[] = ['name', 'shortname', 'baseunit', 'createdon', 'action'];
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
  OnShowFilter() {
    this.ShowFilter = true;
  }
  ShowModel() {
    this.ShowModal = true;
  }
  OnCancel() {
    this.ShowModal = false;
    this.ShowUnitModal = false;
  }
  OncreateUnit() {
    this.ShowUnitModal = true;
  }
}
