import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { CommonService } from '../../commonservice';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  reference: string;
  weight: string;
  status: string;
  total: string;
  paid: string;
  due: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  { reference: "SA_1111966", name: 'Hydrogen', weight: "Received", status: 'H', total: "8665", paid: "yes", due: 'no' },
  { reference: "SA_1111966", name: 'Helium', weight: "Paid", status: 'He', total: "8665", paid: "yes", due: 'no' },
  { reference: 'SA_1111966', name: 'Lithium', weight: "Received", status: 'Li', total: "8665", paid: "yes", due: 'no' },
  { reference: 'SA_1111966', name: 'Beryllium', weight: "Received", status: 'Be', total: "8665", paid: "yes", due: 'no' },
  { reference: 'SA_1111966', name: 'Boron', weight: "Received", status: 'B', total: "8665", paid: "yes", due: 'no' },
  { reference: 'SA_1111966', name: 'Carbon', weight: "Received", status: 'C', total: "8665", paid: "yes", due: 'no' },
  { reference: 'SA_1111966', name: 'Nitrogen', weight: "Received", status: 'N', total: "8665", paid: "yes", due: 'no' },
  { reference: 'SA_1111966', name: 'Oxygen', weight: "Received", status: 'O', total: "8665", paid: "yes", due: 'no' },
  { reference: 'SA_1111966', name: 'Fluorine', weight: "Received", status: 'F', total: "8665", paid: "yes", due: 'no' },
  { reference: 'SA_1111966', name: 'Neon', weight: "Received", status: 'Ne', total: "8665", paid: "yes", due: 'no' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isNavMinimized = false;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'grandtotal', 'paid', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);



  constructor(public commonService: CommonService, private _liveAnnouncer: LiveAnnouncer) { }

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
