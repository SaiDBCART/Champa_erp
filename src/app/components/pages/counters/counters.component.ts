import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../../commonservice';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
export interface PeriodicElement {
  user: string;


}


const ELEMENT_DATA: PeriodicElement[] = [
  { user: 'counter1' }, { user: 'counter2' }, { user: 'counter3' }, { user: 'counter4' }, { user: 'counter5' }, { user: 'counter6' },
];

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss']
})
export class CountersComponent implements OnInit {
  isNavMinimized = false;
  createcounter = false;
  ShowModal = false;
  EditCounter = false;
  displayedColumns: string[] = ['name', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSourceWithPageSize = new MatTableDataSource(ELEMENT_DATA);
  constructor(public commonService: CommonService, private _liveAnnouncer: LiveAnnouncer, private router: Router) { }

  ngOnInit(): void {
    this.commonService.aClickedEvent
      .subscribe((data: string) => {
        this.isNavMinimized = !this.isNavMinimized;

        console.log('Event message from Component A: ' + data);
      });
  }




  @ViewChild('paginator') paginator: MatPaginator | any;
  @ViewChild('paginatorPageSize') paginatorPageSize: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  pageSizes = [3, 5, 7];
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSourceWithPageSize.paginator = this.paginatorPageSize;
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

  ShowModel() {

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  OnEditcounter() {
    this.EditCounter = true;
  }
  OncreateCounter() {
    this.createcounter = true;
  }
  OnCancel() {
    this.ShowModal = false;
    this.createcounter = false;
    this.EditCounter = false;
  }
}
