import  { Component, OnInit,ViewChild } from '@angular/core';
import { CommonService } from 'src/app/components/commonservice';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
export interface PeriodicElement {
  name: string;
 
}


const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'petrol' },
  { name: 'rent' },
  { name: 'otherexpense' },
  { name: 'tasiba' },
  { name: 'wwww' },
  { name: 'rent' },
  { name: 'www' },
  { name: 'employee payrol' },
  { name: 'petrol' },
  { name: 'petrol' },
  { name: 'petrol' },
  { name: 'petrol' },
  { name: 'petrol' },
  { name: 'petrol' },
  { name: 'petrol' },
 
];

@Component({
  selector: 'app-expense-categories',
  templateUrl: './expense-categories.component.html',
  styleUrls: ['./expense-categories.component.scss']
})
export class ExpenseCategoriesComponent implements OnInit {

  isNavMinimized = false;
  ShowFilter = false;
  ShowUnitModal = false;
  Showexpensecategories =false;
  ShowEditExpenseCategory=false;
  ShowModal = false;
  displayedColumns: string[] = ['name',  'action'];
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
    this. Showexpensecategories=false;
    this.ShowEditExpenseCategory=false;
  }
  Onexpensecategories() {
   this. Showexpensecategories=true;

  }
  editexpensecategory(){
    this.ShowEditExpenseCategory=true;
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
