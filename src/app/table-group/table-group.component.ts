import { Component, OnInit } from '@angular/core';
// import { MusicObject } from './music-object';
// import { MusicData } from './music-data';
import { LoadDataService } from './load-data.service';

@Component({
  selector: 'app-table-group',
  templateUrl: './table-group.component.html',
  styleUrls: ['./table-group.component.scss']
})
export class TableGroupComponent implements OnInit {
  allStatus: any = [];

  pageLength: number = 5;
  sliceStart: number;
  sliceEnd: number;

  constructor(private loadDataService: LoadDataService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loadDataService.getUrlData().subscribe(data => {
      this.allStatus = data;
      console.log(this.allStatus);
    });
  }

  sortNumber() {
    this.loadDataService.getUrlData().subscribe(data => {
      this.allStatus = data;
      this.allStatus.sort(function(a, b) {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      });
    });
  }

  sortData() {
    this.loadDataService.getUrlData().subscribe(data => {
      this.allStatus = data;
      this.allStatus.sort(function(a, b) {
        var nameA = a.title.toUpperCase(); // ignore upper and lowercase
        var nameB = b.title.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    });
  }

}
