import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../commonservice';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
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
  { reference: "Luiz Warehouse", name: 'Chennai', weight: "8796969670", warehouse: 'India,Tamilnadu', status: '$500', total: "8665", paid: "yes", type: "609-202", due: 'no', createdon: '21/10/2022' },
  { reference: "Warehouse", name: 'Bangalore', weight: "8796969670", warehouse: 'India,Tamilnadu', status: '$500', total: "8665", paid: "yes", type: "609-298", due: 'no', createdon: '21/10/2022' },
  { reference: 'Luiz Warehouse', name: 'Cochin', weight: "8796969670", warehouse: 'India,Tamilnadu', status: '$500', total: "8665", paid: "yes", type: "879-678", due: 'no', createdon: '21/10/2022' },
  { reference: 'Khija Warehouse', name: 'Mangalore', weight: "7685885857", warehouse: 'India,Tamilnadu', status: '$500', total: "8665", paid: "yes", type: "567-890", due: 'no', createdon: '21/10/2022' },
  { reference: 'Luiz Warehouse', name: 'Mumbai', weight: "6868556677", warehouse: 'India,Tamilnadu', status: '$500', total: "8665", paid: "yes", type: "456-789", due: 'no', createdon: '21/10/2022' },
  { reference: 'Lonim Warehouse', name: 'Goa', weight: "7585858758", warehouse: 'India,Tamilnadu', status: '$500', total: "8665", paid: "yes", type: "787-698", due: 'no', createdon: '21/10/2022' },
  { reference: 'Jinkil Warehouse', name: 'Utterkhand', weight: "8796969670", warehouse: 'India,Tamilnadu', status: '$500', total: "8665", paid: "yes", type: "768-698", due: 'no', createdon: '21/10/2022' },
  { reference: 'Luiz Warehouse', name: 'Trichy', weight: "8796969670", warehouse: 'India,Tamilnadu', status: '$500', total: "8665", paid: "yes", type: "456-878", due: 'no', createdon: '21/10/2022' },
  { reference: 'Hendry Warehouse', name: 'Coimbatore', weight: "8796969670", warehouse: 'India,Tamilnadu', status: '$500', total: "8665", paid: "yes", type: "987-678", due: 'no', createdon: '21/10/2022' },
  { reference: 'Luiz Warehouse', name: 'Tutoricon', weight: "8796969670", warehouse: 'India,Tamilnadu', status: '$500', total: "8665", paid: "yes", type: "909-870", due: 'no', createdon: '21/10/2022' },
];
@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {
  isNavMinimized = false;
  ShowModal = false;
  displayedColumns: string[] = ['code', 'name', 'brand', 'weight', 'type', 'createdon', 'action'];
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

  OnsaleEdit() {
    this.router.navigate(["/editsale"]);
  }
  OnCancelSale() {
    this.ShowModal = false;
  }
  ShowModel() {
    this.ShowModal = true;
  }
  OnViewwarehouse() {
    this.router.navigate(["/viewwarehouse"]);
  }
  OnEditwarehouse() {
    this.router.navigate(["/editwarehouse"]);
  }
  removeAt(index: number) {
    const data = this.dataSource.data;
    data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);

    this.dataSource.data = data;

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
