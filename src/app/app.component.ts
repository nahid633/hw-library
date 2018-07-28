import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: MenuItem[];
  ngOnInit(): void {
    this.items = [
      {
        label: 'My Books',
        icon: 'fa fa-book',
        routerLink: 'all'
      },
      {
        label: 'New',
        icon: 'fa fa-fw fa-edit',
        routerLink: 'new'
      },
      {
        label: 'Categories',
        icon: 'fa fa-list-alt',
        routerLink: 'categories'
      },
    ];
  }


}
