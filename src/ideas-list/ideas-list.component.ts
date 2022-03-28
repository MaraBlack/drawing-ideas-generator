import { Component, Input, OnInit } from '@angular/core';
import { IdeasListService } from './service/ideas-list.service';

@Component({
  selector: 'ideas-list',
  templateUrl: './ideas-list.component.html',
  styleUrls: ['./ideas-list.component.scss'],
})
export class IdeasListComponent implements OnInit {
  @Input() list: Array<string> = [];

  constructor() {}

  ngOnInit() {
  }
}
