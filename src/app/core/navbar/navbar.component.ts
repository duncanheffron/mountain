import { Component} from '@angular/core';

@Component({
  selector: 'mt-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent{
  collapsed = false;

  toggleMenu() {
    this.collapsed = !this.collapsed;
    const body = document.getElementsByTagName('body')[0];
    body.classList.toggle('nav-open');
  }

  closeMenu() {
    this.collapsed = false;
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('nav-open');
  }
}
