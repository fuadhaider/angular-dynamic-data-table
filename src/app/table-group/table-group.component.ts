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

  getData(): void {
    this.loadDataService.getUrlData().subscribe(data =>
    this.allStatus = data);
  }

}
