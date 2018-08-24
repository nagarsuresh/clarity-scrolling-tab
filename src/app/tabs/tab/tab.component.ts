import { TabHeaderDirective } from './../tab-header.directive';
import { Component, OnInit, Input, Inject, forwardRef, ViewChild, TemplateRef, ContentChild, AfterContentInit } from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';

@Component({
  selector: 'sn-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit, AfterContentInit {

  @Input()
  title: string;

  @ContentChild(TabHeaderDirective, { read: TemplateRef})
  tabHeader: TemplateRef<any>;

  @ViewChild(TemplateRef)
  contents: TemplateRef<any>;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
  }

}
