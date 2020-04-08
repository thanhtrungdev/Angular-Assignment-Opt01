import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ComputerListComponent } from './components/computers/computer-list/computer-list.component';
import { CustomerListComponent } from './components/customers/customer-list/customer-list.component';
import { ServiceListComponent } from './components/services/service-list/service-list.component';
import { ComputerCreateComponent } from './components/computers/computer-create/computer-create.component';
import { ComputerEditComponent } from './components/computers/computer-edit/computer-edit.component';
import { CustomerCreateComponent } from './components/customers/customer-create/customer-create.component';
import { CustomerEditComponent } from './components/customers/customer-edit/customer-edit.component';
import { ServiceCreateComponent } from './components/services/service-create/service-create.component';
import { ServiceEditComponent } from './components/services/service-edit/service-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'computers',
    component: ComputerListComponent,
    children: [
      { path: 'create', component: ComputerCreateComponent },
      { path: 'edit', component: ComputerEditComponent },
    ],
  },
  {
    path: 'customers',
    component: CustomerListComponent,
    children: [
      { path: 'create', component: CustomerCreateComponent },
      { path: 'edit', component: CustomerEditComponent },
    ],
  },
  {
    path: 'services',
    component: ServiceListComponent,
    children: [
      { path: 'create', component: ServiceCreateComponent },
      { path: 'edit', component: ServiceEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
