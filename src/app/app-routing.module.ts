import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HGridPagingSampleComponent } from './hierarchical-grid/hierarchical-grid-paging/hierarchical-grid-paging.component';
import { HGridEditingSampleComponent } from './hierarchical-grid/hierarchical-grid-editing/hierarchical-grid-editing.component';
import { HGridAdvancedFilteringSampleComponent } from './hierarchical-grid/hierarchical-grid-advanced-filtering/hierarchical-grid-advanced-filtering.component';
import { HGridSortingSampleComponent } from './hierarchical-grid/hierarchical-grid-sorting/hierarchical-grid-sorting.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'grid1',
    component: HGridPagingSampleComponent,
  },
  {
    path: 'grid2',
    component: HGridSortingSampleComponent,
  },
  {
    path: 'grid3',
    component: HGridAdvancedFilteringSampleComponent,
  },
  {
    path: 'grid4',
    component: HGridEditingSampleComponent,
  },
  {
    path: 'error404',
    component: Error404Component
  },
  {
    path: '**',
    redirectTo: 'error404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
