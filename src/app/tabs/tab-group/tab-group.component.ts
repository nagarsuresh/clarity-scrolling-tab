import { TabComponent } from './../tab/tab.component';
import { Component, OnInit, ContentChild, ContentChildren, QueryList, AfterContentInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'sn-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent implements OnInit, AfterContentInit {

  @ContentChildren(TabComponent)
  tabList: QueryList<TabComponent>;

  @ViewChild('notabs', { read: TemplateRef })
  noTabs: TemplateRef<any>;


  tabContents: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    if (this.tabList.length === 0) {
      this.tabContents = this.noTabs;
    }
    this.tabContents = this.tabList.first.contents;
  }

  public selectTab(index) {
    this.tabContents = this.tabList.toArray()[index].contents;
  }

}
