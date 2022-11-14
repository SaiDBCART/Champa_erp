import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
// import { NgxBarcodeScannerModule } from '@eisberg-labs/ngx-barcode-scanner';
import { NgxBarcodeModule } from 'ngx-barcode';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HeaderComponent } from './components/common/header/header.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { SalesComponent } from './components/pages/dashboard/sales/sales.component';
import { PosComponent } from './components/pages/dashboard/pos/pos.component';
import { DashboardcontentComponent } from './components/pages/dashboard/dashboardcontent/dashboardcontent.component';
import { CreatesaleComponent } from './components/pages/dashboard/sales/createsale/createsale.component';
import { Counter1Component } from './components/pages/counters/counter1/counter1.component';
import { ViewsalesComponent } from './components/pages/dashboard/sales/viewsales/viewsales.component';
import { EditsalesComponent } from './components/pages/dashboard/sales/editsales/editsales.component';
import { ProductsComponent } from './components/pages/dashboard/products/products.component';
import { CreateproductComponent } from './components/pages/dashboard/products/createproduct/createproduct.component';
import { EditproductComponent } from './components/pages/dashboard/products/editproduct/editproduct.component';
import { ViewProductComponent } from './components/pages/dashboard/products/view-product/view-product.component';
import { ProductCategoriesComponent } from './components/pages/dashboard/products/product-categories/product-categories.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    SalesComponent,
    PosComponent,
    DashboardcontentComponent,
    CreatesaleComponent,
    Counter1Component,
    ViewsalesComponent,
    EditsalesComponent,
    ProductsComponent,
    CreateproductComponent,
    EditproductComponent,
    ViewProductComponent,
    ProductCategoriesComponent

  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, NgxBarcodeModule,
    AppRoutingModule, NgSelectModule, FormsModule, MatPaginatorModule, MatSortModule, MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
