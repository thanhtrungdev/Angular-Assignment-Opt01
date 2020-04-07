import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DataTablesModule } from 'angular-datatables';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { DetailsComponent } from './components/details/details.component';

import { ComputerListComponent } from './components/computers/computer-list/computer-list.component';
import { ComputerFormsComponent } from './components/computers/computer-forms/computer-forms.component';
import { ComputerCreateComponent } from './components/computers/computer-create/computer-create.component';
import { ComputerEditComponent } from './components/computers/computer-edit/computer-edit.component';

import { CustomerListComponent } from './components/customers/customer-list/customer-list.component';
import { CustomerFormsComponent } from './components/customers/customer-forms/customer-forms.component';
import { CustomerCreateComponent } from './components/customers/customer-create/customer-create.component';
import { CustomerEditComponent } from './components/customers/customer-edit/customer-edit.component';

import { ServiceListComponent } from './components/services/service-list/service-list.component';
import { ServiceFormsComponent } from './components/services/service-forms/service-forms.component';
import { ServiceCreateComponent } from './components/services/service-create/service-create.component';
import { ServiceEditComponent } from './components/services/service-edit/service-edit.component';

import { UseComputerComponent } from './components/reg-to-use/use-computer/use-computer.component';
import { UseServiceComponent } from './components/reg-to-use/use-service/use-service.component';

@NgModule({
  declarations: [
    AppComponent,
    ComputerListComponent,
    ComputerFormsComponent,
    ComputerCreateComponent,
    ComputerEditComponent,
    CustomerListComponent,
    CustomerFormsComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    ServiceListComponent,
    ServiceFormsComponent,
    ServiceCreateComponent,
    ServiceEditComponent,
    UseComputerComponent,
    UseServiceComponent,
    HomeComponent,
    DetailsComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
