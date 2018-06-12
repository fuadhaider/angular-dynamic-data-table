import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadDataService } from './load-data.service';
import { SortService } from './sort.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table-group',
  templateUrl: './table-group.component.html',
  styleUrls: ['./table-group.component.scss']
})
export class TableGroupComponent implements OnInit {
  dataArray: any = [];
  showData: any = [];
  query: string = "";
  pageLength: number = 50;
  pageStart: number = 0;
  pageEnd: number = 50;
  totalPageNumber: number;
  currentPageNumber: number = 1;
  private columnSortedSubscription: Subscription;

  constructor(private loadDataService: LoadDataService,
              private sortService: SortService) { }

  ngOnInit() {
    this.getData();
    this.sortDataSubscription();
  }

  getData() {
    this.loadDataService.getUrlData().subscribe(data => {
      this.dataArray = data;
      this.showData = this.dataArray;
      this.getTotalPage();
      this.getCurrentPage();
    });
  }

  setPageLength(a:number) {
    this.pageLength = a;
    this.pageEnd = this.pageStart + this.pageLength;
    this.getTotalPage();
    this.getCurrentPage();
  }

  getTotalPage() {
    this.totalPageNumber = Math.ceil(this.showData.length / this.pageLength);
  }

  getCurrentPage() {
    this.currentPageNumber = Math.floor(this.pageStart / this.pageLength) + 1;
  }

  goPreviousPage() {
    if(this.pageStart <= this.pageLength) {
      this.pageStart = 0
    } else {
      this.pageStart = this.pageStart - this.pageLength;
      this.pageEnd = this.pageEnd - this.pageLength;
    }
    this.getCurrentPage();
  }

  goNextPage() {
    this.pageStart = this.pageStart + this.pageLength;
    this.pageEnd = this.pageEnd + this.pageLength;
    this.getCurrentPage();
  }

  getPageNumber(a:number) {
    if(a==1) {
      this.pageStart = 0;
      this.pageEnd = this.pageStart + this.pageLength;
    } else {
      this.pageStart = this.pageLength * (a-1);
      this.pageEnd = this.pageStart + this.pageLength;
    }
    this.getCurrentPage();
  }

  filterData() {
    this.pageStart = 0;
    this.pageEnd = this.pageLength;
    this.showData = this.dataArray.filter(function(el){
      var result="";
        for(var key in el){
          result+= el[key];
        }
        return result.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
    }.bind(this));
    this.getTotalPage();
    this.getCurrentPage();
  }

  sortDataSubscription() {
    this.columnSortedSubscription = this.sortService.columnSorted$.subscribe(event => {
      console.log(event.sortColumn, event.sortDirection );
      this.sortColumn(event);
    });
  }

  sortColumn(event) {
    if (event.sortColumn == 'album') {
      if (event.sortDirection == '') {
        this.showData = this.showData.sort(function(a, b) {
          return a.albumId - b.albumId;
        });
      }
      else if (event.sortDirection == 'desc') {
        this.showData = this.showData.sort(function(a, b) {
          return b.albumId - a.albumId;
        });
      }
      else if (event.sortDirection == 'asc') {
        this.showData = this.showData.sort(function(a, b) {
          return a.albumId - b.albumId;
        });
      }
    }
    else if (event.sortColumn == 'id') {
      if (event.sortDirection == '') {
        this.showData = this.showData.sort(function(a, b) {
          return a.id - b.id;
        });
      }
      else if (event.sortDirection == 'desc') {
        this.showData = this.showData.sort(function(a, b) {
          return b.id - a.id;
        });
      }
      else if (event.sortDirection == 'asc') {
        this.showData = this.showData.sort(function(a, b) {
          return a.id - b.id;
        });
      }
    }
    else if (event.sortColumn == 'title') {
      if (event.sortDirection == '') {
        this.showData = this.showData.sort(function(a, b) {
          var nameA = a.title.toUpperCase();
          var nameB = b.title.toUpperCase();
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }
          return 0;
        });
      }
      else if (event.sortDirection == 'desc') {
        this.showData = this.showData.sort(function(a, b) {
          var nameA = a.title.toUpperCase();
          var nameB = b.title.toUpperCase();
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }
          return 0;
        });
      }
      else if (event.sortDirection == 'asc') {
        this.showData = this.showData.sort(function(a, b) {
          var nameA = a.title.toUpperCase();
          var nameB = b.title.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      }
    }
    else if (event.sortColumn == 'url') {
      if (event.sortDirection == '') {
        this.showData = this.showData.sort(function(a, b) {
          var nameA = a.url.toUpperCase();
          var nameB = b.url.toUpperCase();
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }
          return 0;
        });
      }
      else if (event.sortDirection == 'desc') {
        this.showData = this.showData.sort(function(a, b) {
          var nameA = a.url.toUpperCase();
          var nameB = b.url.toUpperCase();
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }
          return 0;
        });
      }
      else if (event.sortDirection == 'asc') {
        this.showData = this.showData.sort(function(a, b) {
          var nameA = a.url.toUpperCase();
          var nameB = b.url.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      }
    }
  }
  ngOnDestroy() {
      this.columnSortedSubscription.unsubscribe();
  }
}
