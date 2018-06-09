import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableGroupComponent } from './table-group/table-group.component';
import { LoadDataService } from './table-group/load-data.service';

@NgModule({
  declarations: [
    AppComponent,
    TableGroupComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [LoadDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
