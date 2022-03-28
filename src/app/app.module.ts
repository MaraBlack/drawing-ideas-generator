import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IdeasListComponent } from '../ideas-list/ideas-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, IdeasListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
