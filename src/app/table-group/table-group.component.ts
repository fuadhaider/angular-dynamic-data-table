import { Component, OnInit } from '@angular/core';
import { MusicObject } from './music-object';
// import { MusicData } from './music-data';
import { LoadDataService } from './load-data.service';

@Component({
  selector: 'app-table-group',
  templateUrl: './table-group.component.html',
  styleUrls: ['./table-group.component.scss']
})
export class TableGroupComponent implements OnInit {
  contentArray: MusicObject[];

  constructor(private loadDataService: LoadDataService) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.loadDataService.sendAll().subscribe(contentArray =>
    this.contentArray = contentArray);
  }

}
