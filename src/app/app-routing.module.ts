import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { DashboardcontentComponent } from './components/pages/dashboard/dashboardcontent/dashboardcontent.component';
import { SalesComponent } from './components/pages/dashboard/sales/sales.component';
import { CreatesaleComponent } from './components/pages/dashboard/sales/createsale/createsale.component';
import { ViewsalesComponent } from './components/pages/dashboard/sales/viewsales/viewsales.component';
import { EditsalesComponent } from './components/pages/dashboard/sales/editsales/editsales.component';
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
import { ExpensesComponent } from './components/pages/expenses/expenses.component';
import { ExpenseCategoriesComponent } from './components/pages/expenses/expense-categories/expense-categories.component';
import { CreateExpensesComponent } from './components/pages/expenses/create-expenses/create-expenses.component';
import { EditExpenseComponent } from './components/pages/expenses/edit-expense/edit-expense.component';
import { CurrenciesComponent } from './components/pages/currencies/currencies.component';
import { CounterslistComponent } from './components/pages/counterslist/counterslist.component';
import { AssignEmployeeComponent } from './components/pages/counterslist/assign-employee/assign-employee.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "dashboard/dasboard1", component: DashboardcontentComponent },
  { path: "dashboard/sales", component: SalesComponent },
  { path: "createsale", component: CreatesaleComponent },
  { path: "viewsale", component: ViewsalesComponent },
  { path: "editsale", component: EditsalesComponent },
  { path: "dashboard/product", component: ProductsComponent },
  { path: "createproduct", component: CreateproductComponent },
  { path: "editproduct", component: EditproductComponent },
  { path: "viewproduct", component: ViewProductComponent },
  { path: "Categories", component: ProductCategoriesComponent },
  { path: "ProductUnit", component: ProductUnitsComponent },
  { path: "Brand", component: ProductBrandsComponent },
  { path: "dashboard/pos", component: PosComponent },
  { path: "warehouse", component: WarehouseComponent },
  { path: "createwarehouse", component: CreatewarehouseComponent },
  { path: "viewwarehouse", component: ViewwarehouseComponent },
  { path: "editwarehouse", component: EditwarehouseComponent },
  { path: "expenses", component: ExpensesComponent },
  { path: "expense-categories", component: ExpenseCategoriesComponent },
  { path: "create-expenses", component: CreateExpensesComponent },
  { path: "edit-expense", component: EditExpenseComponent },
  { path: "currencies", component: CurrenciesComponent },
  { path: "counters", component: CounterslistComponent },
  { path: "AssigningEmployee", component: AssignEmployeeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
