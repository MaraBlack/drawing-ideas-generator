import { Component, OnInit } from '@angular/core';
import { IdeasListService } from '../ideas-list/service/ideas-list.service';
import { environmentList } from './misc/environment';
import { subjectList } from './misc/subjects';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [IdeasListService],
})
export class AppComponent implements OnInit {
  subjectList: Array<string> = [];
  environmentList: Array<string> = [];

  randomItemFromSubject: string = '';
  randomItemFromEnvironment: string = '';

  pair: string = '';

  constructor(private ils: IdeasListService) {}

  ngOnInit() {
    this.subjectList = subjectList;
    this.environmentList = environmentList;
  }

  getRandomPair() {
    this.randomItemFromSubject = this.ils.randomItemFromList(subjectList);
    this.randomItemFromEnvironment =
      this.ils.randomItemFromList(environmentList);

    this.pair =
      this.randomItemFromSubject + ' - ' + this.randomItemFromEnvironment;
  }
}
