import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabGroupComponent } from './tabs/tab-group/tab-group.component';
import { TabComponent } from './tabs/tab/tab.component';
import { TabHeaderComponent } from './tabs/tab-header/tab-header.component';




@NgModule({
  declarations: [
    AppComponent,
    TabGroupComponent,
    TabComponent,
    TabHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
