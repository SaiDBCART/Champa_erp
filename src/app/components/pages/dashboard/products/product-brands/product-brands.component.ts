import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/components/commonservice';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  category: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  { category: "3", name: 'APPLE', },
  { category: "SA_1111966", name: 'APPLE', }, { category: "SA_1111966", name: 'Bat', },
  { category: "SA_1111966", name: 'Laptop', }, { category: "SA_1111966", name: 'Basket', },
  { category: "SA_1111966", name: 'Sunglasses', }, { category: "SA_1111966", name: 'Radio', },
  { category: "SA_1111966", name: 'mobile Phones', }, { category: "SA_1111966", name: 'Notebook', },
  { category: "SA_1111966", name: 'Jackets', }, { category: "SA_1111966", name: 'Glasses', },
];
@Component({
  selector: 'app-product-brands',
  templateUrl: './product-brands.component.html',
  styleUrls: ['./product-brands.component.scss']
})
export class ProductBrandsComponent implements OnInit {
  isNavMinimized = false;
  ShowModal = false;
  ShowCategoryModal = false;
  Showeditbrand= false;
  displayedColumns: string[] = ['code', 'name', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSourceWithPageSize: any;

  constructor(public commonService: CommonService, private _liveAnnouncer: LiveAnnouncer,) { }

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
    this.ShowModal = true;
  }
  OnCancel() {
    this.ShowModal = false;
    this.ShowCategoryModal = false;
    this.Showeditbrand =false;
  }
  OncreateBrand() {
    this.ShowCategoryModal = true;
  }
  editbrand(){
    this.Showeditbrand =true;
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
