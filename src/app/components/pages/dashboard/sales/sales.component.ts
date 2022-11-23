import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/components/commonservice';
import { Router } from '@angular/router';
import { LiveAnnouncer } from '@angular/cdk/a11y';
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
  warehouse: string;
  type: string;
  createdon: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { reference: "SA_1111966", name: 'Hydrogen', weight: "Received", warehouse: 'w1', status: '$500', total: "8665", paid: "yes", type: "cash", due: 'no', createdon: '21/10/2022' },
  { reference: "SA_1111966", name: 'Helium', weight: "Received", warehouse: 'w1', status: '$500', total: "8665", paid: "yes", type: "cash", due: 'no', createdon: '21/10/2022' },
  { reference: 'SA_1111966', name: 'Lithium', weight: "Pending", warehouse: 'w1', status: '$500', total: "8665", paid: "yes", type: "cash", due: 'no', createdon: '21/10/2022' },
  { reference: 'SA_1111966', name: 'Beryllium', weight: "Received", warehouse: 'w1', status: '$500', total: "8665", paid: "yes", type: "cash", due: 'no', createdon: '21/10/2022' },
  { reference: 'SA_1111966', name: 'Boron', weight: "Received", warehouse: 'w1', status: '$500', total: "8665", paid: "yes", type: "cash", due: 'no', createdon: '21/10/2022' },
  { reference: 'SA_1111966', name: 'Carbon', weight: "Received", warehouse: 'w1', status: '$500', total: "8665", paid: "yes", type: "cash", due: 'no', createdon: '21/10/2022' },
  { reference: 'SA_1111966', name: 'Nitrogen', weight: "Received", warehouse: 'w1', status: '$500', total: "8665", paid: "yes", type: "cash", due: 'no', createdon: '21/10/2022' },
  { reference: 'SA_1111966', name: 'Oxygen', weight: "Received", warehouse: 'w1', status: '$500', total: "8665", paid: "yes", type: "cash", due: 'no', createdon: '21/10/2022' },
  { reference: 'SA_1111966', name: 'Fluorine', weight: "Received", warehouse: 'w1', status: '$500', total: "8665", paid: "yes", type: "cash", due: 'no', createdon: '21/10/2022' },
  { reference: 'SA_1111966', name: 'Neon', weight: "Received", warehouse: 'w1', status: '$500', total: "8665", paid: "yes", type: "cash", due: 'no', createdon: '21/10/2022' },
];
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  isNavMinimized = false;
  ShowFilter = false;
  ShowModal = false;
  displayedColumns: string[] = ['position', 'name', 'warehouse', 'symbol', 'grandtotal', 'weight', 'paid', 'type', 'createdon', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  constructor(public commonService: CommonService, private _liveAnnouncer: LiveAnnouncer, private router: Router) { }

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
    this.ShowFilter = !this.ShowFilter;;
  }
  OnsaleView() {
    this.router.navigate(["/viewsale"]);
  }
  OnsaleEdit() {
    this.router.navigate(["/editsale"]);
  }
  OnCancelSale() {
    this.ShowModal = false;
  }
  ShowModel() {
    this.ShowModal = true;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
