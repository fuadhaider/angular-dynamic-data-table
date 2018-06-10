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
  query: string = "";
  pageLength: number = 5;
  pageStart: number = 0;
  pageEnd: number = 5;
  pageMax: number = 4;

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

  setPageLength(a:number) {
    this.pageLength = a;
    this.pageEnd = this.pageStart + this.pageLength;
  }

  pageNumber(a:number) {
    if(a==1) {
      this.pageStart = 0;
      this.pageEnd = this.pageStart + this.pageLength;
    }
    if (a==2) {
      this.pageStart = this.pageLength;
      this.pageEnd = this.pageStart + this.pageLength;
    }
    if (a==3) {
      this.pageStart = this.pageLength*2;
      this.pageEnd = this.pageStart + this.pageLength;
    }
    if (a==4) {
      this.pageStart = this.pageLength*3;
      this.pageEnd = this.pageStart + this.pageLength;
    }
  }

  filterData() {
    this.loadDataService.getUrlData().subscribe(data => {
      this.allStatus = data;

      this.allStatus = this.allStatus.filter(function(el){
        var result="";
          for(var key in el){
            result+= el[key];
          }
          return result.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
      }.bind(this));
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

  sortAlbumId() {
    this.loadDataService.getUrlData().subscribe(data => {
      this.allStatus = data;
      this.allStatus.sort(function(a, b) {
        if (a.albumId < b.albumId) {
          return -1;
        }
        if (a.albumId > b.albumId) {
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

  sortUrl() {
    this.loadDataService.getUrlData().subscribe(data => {
      this.allStatus = data;
      this.allStatus.sort(function(a, b) {
        var nameA = a.url.toUpperCase(); // ignore upper and lowercase
        var nameB = b.url.toUpperCase(); // ignore upper and lowercase
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
