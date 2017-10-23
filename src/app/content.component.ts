import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ContentService } from './content.service';
import { Content } from './content';
import { ContentItem } from './content-item';

@Component({
  selector: 'content-detail',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {

  content: Content;
  currentItem: ContentItem;
  index : number;

  constructor(
    private contentService: ContentService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    
    this.route.paramMap
      .switchMap((params: ParamMap) => this.contentService.getContent(+params.get('id')))
      .subscribe(content => {
        this.content = content;
        this.index = 0;
        this.currentItem = this.content.content[this.index];
      });
  }

  toPrevious(): void {
    this.index -= 1;
    if(this.index === 0) {
    }
    this.currentItem = this.content.content[this.index];
  }
  
  toNext(): void {
    this.index += 1;
    console.log(this.index);
    if(this.index === 49) {
    }
    this.currentItem = this.content.content[this.index];
  }

  atBeginning(): boolean {
    return this.index === 0;
  }

  atEnd(): boolean {
    return this.index === 49;
  }
}