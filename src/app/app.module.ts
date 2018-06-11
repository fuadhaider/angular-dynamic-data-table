import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableGroupComponent } from './table-group/table-group.component';
import { SortableColumnComponent } from './table-group/sortable-column/sortable-column.component';
import { LoadDataService } from './table-group/load-data.service';
import { SortService } from './table-group/sort.service';

@NgModule({
  declarations: [
    AppComponent,
    TableGroupComponent,
    SortableColumnComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    LoadDataService,
    SortService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
