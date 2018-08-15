import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'app';

    tabs = [];
    ngOnInit() {
        for (let i = 0; i < 50; i++) {
            this.tabs.push({
                label: `Tab ${i + 1}`,
                contents: `This content for Tab ${i + 1}`
            });
        }
    }
}
