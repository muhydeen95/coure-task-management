import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './components/error/error.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { CardComponent } from './components/card/card.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FilterDialogComponent } from './dialogs/filter-dialog/filter-dialog.component';

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    LayoutComponent,
    ErrorComponent,
    NoDataComponent,
    CardComponent,
    SearchbarComponent,
    FilterDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatTooltipModule,
    MatTooltipModule,
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    LayoutComponent,
    ErrorComponent,
    NoDataComponent,
    CardComponent,
    SearchbarComponent,
    NgSelectModule,
    FilterDialogComponent
  ],
})
export class SharedModule {}
