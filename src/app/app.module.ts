import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { IgxPreventDocumentScrollModule } from './directives/prevent-scroll.directive';
import { IgxHierarchicalGridModule, IgxDialogModule, IgxButtonModule, IgxCheckboxModule, IgxDatePickerModule } from 'igniteui-angular';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HGridPagingSampleComponent } from './hierarchical-grid/hierarchical-grid-paging/hierarchical-grid-paging.component';
import { HGridContextmenuComponent } from './hierarchical-grid/hierarchical-grid-sorting/hgrid-contextmenu/hgrid-contextmenu.component';
import { HGridSortingSampleComponent } from './hierarchical-grid/hierarchical-grid-sorting/hierarchical-grid-sorting.component';
import { HGridEditingSampleComponent } from './hierarchical-grid/hierarchical-grid-editing/hierarchical-grid-editing.component';
import { HGridAdvancedFilteringSampleComponent } from './hierarchical-grid/hierarchical-grid-advanced-filtering/hierarchical-grid-advanced-filtering.component';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    HGridSortingSampleComponent,
    HGridPagingSampleComponent,
    HGridContextmenuComponent,
    HGridEditingSampleComponent,
    HGridAdvancedFilteringSampleComponent,
    NavbarComponent,
    Error404Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
    IgxHierarchicalGridModule,
		IgxDialogModule,
		IgxButtonModule,
		IgxCheckboxModule,
    IgxDatePickerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
