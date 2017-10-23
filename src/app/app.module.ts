import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ChapterDataService } from './chapter-data.service';

import { AppComponent }  from './app.component';
import { ContentComponent }  from './content.component';
//import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
//import { HeroSearchComponent } from './hero-search.component';
import { ChapterService } from './chapter.service';
import { ContentService } from './content.service';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(ChapterDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ContentComponent
   ],
  bootstrap:    [ AppComponent ],
  providers: [ChapterService, ContentService]
})


export class AppModule { }
