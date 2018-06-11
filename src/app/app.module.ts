import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { TableGroupComponent } from './table-group/table-group.component';
import { SortableColumnComponent } from './table-group/sortable-column/sortable-column.component';
import { LoadDataService } from './table-group/load-data.service';
import { SortService } from './table-group/sort.service';
import { AssumptionComponent } from './assumption/assumption.component';
import { FutureWorkComponent } from './future-work/future-work.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TableGroupComponent,
    SortableColumnComponent,
    AssumptionComponent,
    FutureWorkComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    LoadDataService,
    SortService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
