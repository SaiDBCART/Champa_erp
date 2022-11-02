import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { DashboardcontentComponent } from './components/pages/dashboard/dashboardcontent/dashboardcontent.component';
import { SalesComponent } from './components/pages/dashboard/sales/sales.component';
import { CreatesaleComponent } from './components/pages/dashboard/sales/createsale/createsale.component';
import { ViewsalesComponent } from './components/pages/dashboard/sales/viewsales/viewsales.component';
import { EditsalesComponent } from './components/pages/dashboard/sales/editsales/editsales.component';
import { Counter1Component } from './components/pages/counters/counter1/counter1.component';
import { ProductsComponent } from './components/pages/dashboard/products/products.component';
import { PosComponent } from './components/pages/dashboard/pos/pos.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "dashboard/dasboard1", component: DashboardcontentComponent },
  { path: "dashboard/sales", component: SalesComponent },
  { path: "createsale", component: CreatesaleComponent },
  { path: "viewsale", component: ViewsalesComponent },
  { path: "editsale", component: EditsalesComponent },
  { path: "counter", component: Counter1Component },
  { path: "dashboard/product", component: ProductsComponent },
  { path: "dashboard/pos", component: PosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
