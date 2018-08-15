import { Component, OnInit, Input, Inject, forwardRef, ViewChild, TemplateRef } from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';

@Component({
  selector: 'sn-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input()
  title: string;

  @ViewChild(TemplateRef)
  contents: TemplateRef<any>;

  constructor() {
  }

  ngOnInit() {
  }

}
