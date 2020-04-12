import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { ComputerListComponent } from './components/computers/computer-list/computer-list.component';
import { ComputerFormsComponent } from './components/computers/computer-forms/computer-forms.component';

import { CustomerListComponent } from './components/customers/customer-list/customer-list.component';
import { CustomerFormsComponent } from './components/customers/customer-forms/customer-forms.component';

import { ServiceListComponent } from './components/services/service-list/service-list.component';
import { ServiceFormsComponent } from './components/services/service-forms/service-forms.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'computers',
    component: ComputerListComponent,
    children: [
      { path: 'create', component: ComputerFormsComponent },
      { path: 'edit/:id', component: ComputerFormsComponent },
      { path: 'delete/:id', component: ComputerListComponent },
    ],
  },
  {
    path: 'customers',
    component: CustomerListComponent,
    children: [
      { path: 'create', component: CustomerFormsComponent },
      { path: 'edit/:id', component: CustomerFormsComponent },
      { path: 'delete/:id', component: CustomerListComponent },
    ],
  },
  {
    path: 'services',
    component: ServiceListComponent,
    children: [
      { path: 'create', component: ServiceFormsComponent },
      { path: 'edit/:id', component: ServiceFormsComponent },
      { path: 'delete/:id', component: ServiceListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
