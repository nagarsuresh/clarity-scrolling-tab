import {
  AfterContentChecked, Component, ElementRef,
  EventEmitter, HostBinding, Input, OnInit, Output, ViewChild, ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'sn-tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabHeaderComponent implements OnInit, AfterContentChecked {

  @HostBinding('class.nav') navClass = true;

  @Input()
  tabList;

  @Output()
  select: EventEmitter<number> = new EventEmitter();

  @ViewChild('container', { read: ElementRef })
  containerEl: ElementRef;

  @ViewChild('list', { read: ElementRef })
  listEl: ElementRef;

  selectedIndex = 0;
  private _scrollDistanceChanged: boolean;

  private _scrollDistance = 0;
  get scrollDistance(): number { return this._scrollDistance; }
  set scrollDistance(v: number) {
    this._scrollDistance = Math.max(0, Math.min(this.getMaxScrollDistance(), v));
    this._scrollDistanceChanged = true;
  }

  constructor() { }


  ngOnInit() {
  }

  ngAfterContentChecked() {
    if (this._scrollDistanceChanged) {
      this.updateTabScrollPosition();
      this._scrollDistanceChanged = false;
    }
  }

  selectTab(index) {
    this.selectedIndex = index;
    this.select.emit(index);
  }

  scrollTo(dir: 'left' | 'right') {
    const viewLength = this.containerEl.nativeElement.offsetWidth;
    this.scrollDistance += (dir === 'left' ? -1 : 1) * viewLength / 2;
  }

  getMaxScrollDistance(): number {
    const lengthOfLinksLis = this.listEl.nativeElement.scrollWidth;
    const lengthOfContainer = this.containerEl.nativeElement.offsetWidth;
    return (lengthOfLinksLis - lengthOfContainer) || 0;
  }

  updateTabScrollPosition() {
    const scrollDistance = this.scrollDistance;
    const translateX = -scrollDistance;
    this.listEl.nativeElement.style.transform = `translateX(${translateX}px)`;
  }


}
