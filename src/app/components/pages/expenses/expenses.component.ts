import { Component, OnInit,ViewChild } from '@angular/core';
import { CommonService } from '../../commonservice';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
export interface PeriodicElement {
  reference: string;
  expensetitle: string;
  warehoue: string; createdon: string;
  expensecategory:string;
  amount:string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  { reference: 'Ex-112', expensetitle: "ahmed", warehoue: "warehoue2",expensecategory:"employparol",amount:"$200", createdon: '11/11/2022' }, { reference: 'jacket', expensetitle: "apl", warehoue: "kilogram", expensecategory:"employparol",amount:"$200",createdon: '11/11/2022' },
  { reference: 'Ex-113', expensetitle: "rs.malad", warehoue: "piece", expensecategory:"employparol",amount:"$200",createdon: '11/11/2022' },
  { reference: 'Ex-114', expensetitle: "salary", warehoue: "warehoue1",expensecategory:"employparol",amount:"$200", createdon: '11/11/2022' },
  { reference: 'Ex-115', expensetitle: "rent a car", warehoue: "warehoue",expensecategory:"employparol",amount:"$200", createdon: '11/11/2022' },
  { reference: 'Ex-116', expensetitle: "hh", warehoue: "warehoue2",expensecategory:"employparol",amount:"$200",createdon: '11/11/2022' },
  { reference: 'Ex-117', expensetitle: "ww", warehoue: "warehoue5",expensecategory:"employparol",amount:"$200", createdon: '11/11/2022' },
  { reference: 'Ex-118', expensetitle: "testy", warehoue: "warehoue",expensecategory:"employparol",amount:"$200", createdon: '11/11/2022' },
  { reference: 'Ex-119', expensetitle: "80000", warehoue: "warehoue", expensecategory:"employparol",amount:"$200",createdon: '11/11/2022' },
];

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  isNavMinimized = false;
  ShowFilter = false;
  ShowUnitModal = false;
  ShowModal = false;
  displayedColumns: string[] = ['reference', 'expensetitle', 'warehoue','expensecategory','amount', 'createdon', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSourceWithPageSize: any;


  constructor(public commonService: CommonService, private _liveAnnouncer: LiveAnnouncer,private router: Router) { }
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
  Oncreateexpenses() {
    this.ShowUnitModal = true;
  this.router.navigate(['/create-expenses'])
  }
  removeAt(index: number) {
    const data = this.dataSource.data;
    data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);

    this.dataSource.data = data;
  }
  editexpense(){
    this.router.navigate(['/edit-expense'])
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
