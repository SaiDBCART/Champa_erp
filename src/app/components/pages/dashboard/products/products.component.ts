import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/components/commonservice';
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
  { reference: "SA_1111966", name: 'APPLE', weight: "kilogram", warehouse: 'Limestone', status: '$500', total: "8665", paid: "yes", type: "cash", due: 'no', createdon: '21/10/2022' },
  { reference: "SA_1111966", name: 'ORANGE', weight: "kilogram", warehouse: 'Flipup', status: '$500', total: "8665", paid: "yes", type: "cash", due: 'no', createdon: '21/10/2022' },
  { reference: 'SA_1111966', name: 'MOBILE', weight: "piece", warehouse: 'worldsbest', status: '$500', total: "8665", paid: "yes", type: "cash", due: 'no', createdon: '21/10/2022' },
  { reference: 'SA_1111966', name: 'LAPTOP', weight: "piece", warehouse: 'Wondersstore', status: '$500', total: "8665", paid: "yes", type: "cash", due: 'no', createdon: '21/10/2022' },
  { reference: 'SA_1111966', name: 'SUNGLASS', weight: "piece", warehouse: 'Coolindia', status: '$500', total: "8665", paid: "yes", type: "cash", due: 'no', createdon: '21/10/2022' },
  { reference: 'SA_1111966', name: 'UMBERLLA', weight: "piece", warehouse: 'NewTown', status: '$500', total: "8665", paid: "yes", type: "cash", due: 'no', createdon: '21/10/2022' },
  { reference: 'SA_1111966', name: 'RAINCOAT', weight: "box", warehouse: 'Timesnew', status: '$500', total: "8665", paid: "yes", type: "cash", due: 'no', createdon: '21/10/2022' },
  { reference: 'SA_1111966', name: 'T-SHIRT', weight: "pack", warehouse: 'TitanShore', status: '$500', total: "8665", paid: "yes", type: "cash", due: 'no', createdon: '21/10/2022' },
  { reference: 'SA_1111966', name: 'KEYBOARD', weight: "piece", warehouse: 'ClassicWorld', status: '$500', total: "8665", paid: "yes", type: "cash", due: 'no', createdon: '21/10/2022' },
  { reference: 'SA_1111966', name: 'NOTEBOOK', weight: "pack", warehouse: 'Dell', status: '$500', total: "8665", paid: "yes", type: "cash", due: 'no', createdon: '21/10/2022' },
];


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  isNavMinimized = false;
  ShowModal = false;
  showpopup = false;
  displayedColumns: string[] = ['code', 'name', 'brand', 'weight', 'paid', 'type', 'createdon', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  constructor(public commonService: CommonService, private _liveAnnouncer: LiveAnnouncer, private router: Router) { }

  ngOnInit(): void {
    this.commonService.aClickedEvent
      .subscribe((data: string) => {
        this.isNavMinimized = !this.isNavMinimized;

        console.log('Event message from Component A: ' + data);
      });
  }
  OnproductView() {
    this.router.navigate(["/viewproduct"])

  }
  OnproductEdit() {
    this.router.navigate(["/editproduct"])
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

  onfilterOption() {
    this.showpopup = !this.showpopup;
  }
  OnCancelSale() {
    this.ShowModal = false;
  }
  ShowModel() {
    this.ShowModal = true;
  }
}
