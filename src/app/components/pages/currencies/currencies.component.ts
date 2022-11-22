import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/components/commonservice';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  code: string;
  symbol:string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'APPLE', code:'idn',symbol:'rp'},
  {  name: 'APPLE',code:'riz',symbol:'rs' }, {  name: 'Bat',code:'idr',symbol:'rp' },
  {  name: 'Laptop', code:'rd',symbol:'rs'}, { name: 'Basket', code:'idr',symbol:'sgd'},
  { name: 'Sunglasses',code:'rd',symbol:'rs' }, { name: 'Radio', code:'riz',symbol:'rp'},
  {  name: 'mobile Phones', code:'we',symbol:'sgd'}, {  name: 'Notebook',code:'www',symbol:'rs' },
  {  name: 'Jackets', code:'ed',symbol:'sgd'}, {  name: 'Glasses', code:'rd',symbol:'rs'},
];
@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {
  isNavMinimized = false;
  ShowModal = false;
  ShowCurrenciesModal = false;
  Showeditcurrencies= false;
  displayedColumns: string[] = ['name', 'code', 'symbol','action'];
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
    this.ShowCurrenciesModal = false;
    this.Showeditcurrencies =false;
  }
  Oncreatecurrencies() {
    this.ShowCurrenciesModal = true;
  }
  editbrand(){
    this.Showeditcurrencies=true;
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
