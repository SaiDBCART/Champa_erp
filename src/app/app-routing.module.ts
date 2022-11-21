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
import { CreateproductComponent } from './components/pages/dashboard/products/createproduct/createproduct.component';
import { EditproductComponent } from './components/pages/dashboard/products/editproduct/editproduct.component';
import { ViewProductComponent } from './components/pages/dashboard/products/view-product/view-product.component';
import { ProductCategoriesComponent } from './components/pages/dashboard/products/product-categories/product-categories.component';
import { ProductUnitsComponent } from './components/pages/dashboard/products/product-units/product-units.component';
import { ProductBrandsComponent } from './components/pages/dashboard/products/product-brands/product-brands.component';
import { PosComponent } from './components/pages/dashboard/pos/pos.component';
import { WarehouseComponent } from './components/pages/warehouse/warehouse.component';
import { CreatewarehouseComponent } from './components/pages/warehouse/createwarehouse/createwarehouse.component';
import { ViewwarehouseComponent } from './components/pages/warehouse/viewwarehouse/viewwarehouse.component';
import { EditwarehouseComponent } from './components/pages/warehouse/editwarehouse/editwarehouse.component';
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
  { path: "createproduct", component: CreateproductComponent },
  { path: "editproduct", component: EditproductComponent },
  { path: "viewproduct", component: ViewProductComponent },
  { path: "ProductCategories", component: ProductCategoriesComponent },
  { path: "ProductUnit", component: ProductUnitsComponent },
  { path: "Brand", component: ProductBrandsComponent },
  { path: "dashboard/pos", component: PosComponent },
  { path: "warehouse", component: WarehouseComponent },
  { path: "createwarehouse", component: CreatewarehouseComponent },
  { path: "viewwarehouse", component: ViewwarehouseComponent },
  { path: "editwarehouse", component: EditwarehouseComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
