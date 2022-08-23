import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//PrimeNg Modules
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import {RatingModule} from 'primeng/rating';
import {ButtonModule} from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { TabMenuModule } from 'primeng/tabmenu';

import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ManagementComponent } from './components/management/management.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    ManagementComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataViewModule,
    DropdownModule,
    RatingModule,
    ButtonModule,
    ChipModule,
    InputTextModule,
    TableModule,
    TabMenuModule,
    ToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
