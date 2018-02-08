import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  slideMenu = false;
  constructor() { }

  ngOnInit() {
  }

  toggleNav() {
    if (this.slideMenu === false) {
      this.slideMenu = true;
    } else {
      this.slideMenu = false;
    }
  }
}
