import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/components/commonservice';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  user: string;
  counter: string;
  timing: string;
  balance: string

}


const ELEMENT_DATA: PeriodicElement[] = [
  { user: 'Bharath', counter: 'Counter1', timing: '10.00am - 2.00pm', balance: '10,000' },
  { user: 'pavithra', counter: 'Counter2', timing: '10.00am - 2.00pm', balance: '10,000' },
  { user: 'chinraj', counter: 'Counter3', timing: '10.00am - 2.00pm', balance: '10,000' }, { user: 'Paramesh', counter: 'Counter4', timing: '10.00am - 2.00pm', balance: '10,000' },];
@Component({
  selector: 'app-assign-employee',
  templateUrl: './assign-employee.component.html',
  styleUrls: ['./assign-employee.component.scss']
})
export class AssignEmployeeComponent implements OnInit {

  isNavMinimized = false;
  createcounter = false;
  ShowModal = false;
  EditCounter = false;

  // Timepicker starts
  // public mode: PickerInteractionMode = PickerInteractionMode.DropDown;
  // public format = 'hh:mm tt';
  // public date: Date = new Date();
  displayedColumns: string[] = ['counter', 'employ', 'balance', 'timing', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSourceWithPageSize = new MatTableDataSource(ELEMENT_DATA);
  keyword1 = 'name';
  public countries1 = [
    {

      name: 'warehouse 1',
    },
    {

      name: 'warehouse 2'
    },
    {

      name: 'warehouse 3'
    },
  ];
  employ = 'name';
  public employees = [
    {

      name: 'Bharath',
    },
    {

      name: 'Pavithra'
    },
    {

      name: 'Chinraj'
    },
    {

      name: 'Hariharan'
    }, {

      name: 'Paramesh'
    }, {

      name: 'Einstien'
    },
  ];



  length: number | any;
  countryCtrl: FormControl | any;

  filteredCountry: Observable<any[]>;
  constructor(public commonService: CommonService, private _liveAnnouncer: LiveAnnouncer, private router: Router) {
    this.countryCtrl = new FormControl();
    this.filteredCountry = this.countryCtrl.valueChanges.pipe(
      startWith(''),
      map((country: string) =>
        country ? this.filtercountry(country) : ELEMENT_DATA.slice()
      )
    );
  }
  filtercountry(user: string) {
    let arr = ELEMENT_DATA.filter(
      (country) => country.user.toLowerCase().indexOf(user.toLowerCase()) === 0
    );

    return arr.length ? arr : [{ name: 'No Item found', code: 'null' }];
  }
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
  selectEvent(item: any) {

  }
  onChangeSearch(val: string) {

  }
  onFocused(e: any) {
    // do something when input is focused
  }

}
