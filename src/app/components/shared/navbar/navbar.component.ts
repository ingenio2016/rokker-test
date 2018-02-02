import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  sidebar = 'sidebar';
  constructor() { }

  ngOnInit() {
  }

  toggleNav() {
    if (this.sidebar === '') {
      this.sidebar = 'sidebar';
    } else {
      this.sidebar = '';
    }
    return this.sidebar;
  }
}
