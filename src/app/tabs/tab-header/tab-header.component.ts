import {
  AfterContentChecked, AfterViewInit, ChangeDetectionStrategy,
  ChangeDetectorRef, Component, ElementRef, EventEmitter, HostBinding, Input, OnInit, Output, ViewChild, QueryList
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'sn-tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabHeaderComponent implements OnInit, AfterContentChecked, AfterViewInit {

  @HostBinding('class.nav') navClass = true;

  @Input()
  tabList: QueryList<TabComponent>;

  @Output()
  select: EventEmitter<number> = new EventEmitter();

  @ViewChild('container', { read: ElementRef })
  containerEl: ElementRef;

  @ViewChild('list', { read: ElementRef })
  listEl: ElementRef;

  selectedIndex = 0;
  private _scrollDistanceChanged: boolean;

  disableScrollRight = false;
  disableScrollLeft = false;

  private _scrollDistance = 0;
  get scrollDistance(): number { return this._scrollDistance; }
  set scrollDistance(v: number) {
    this._scrollDistance = Math.max(0, Math.min(this.getMaxScrollDistance(), v));
    this._scrollDistanceChanged = true;
    this.checkScrollingControls();
  }

  constructor(private cd: ChangeDetectorRef) { }


  ngOnInit() {
  }

  ngAfterContentChecked() {
    if (this._scrollDistanceChanged) {
      this.updateTabScrollPosition();
      this._scrollDistanceChanged = false;
      this.checkScrollingControls();
    }
  }

  ngAfterViewInit() {
    this.checkScrollingControls();
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

  checkScrollingControls() {
    this.disableScrollLeft = this.scrollDistance === 0;
    this.disableScrollRight = this.scrollDistance === this.getMaxScrollDistance();
    this.cd.markForCheck();
  }



}
