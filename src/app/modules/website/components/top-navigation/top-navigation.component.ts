import { Component } from "@angular/core";

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss'],
})
export class TopNavigation {
  mobileMenuVisible: boolean = false;

  toggleMobileMenuVisible():void {
    this.mobileMenuVisible = !this.mobileMenuVisible;
    this.setMenuStyle();
  }

  windowResize():void {
    if (screen.width > 990 && this.mobileMenuVisible) {
      this.toggleMobileMenuVisible();
      this.setMenuStyle();
    }
  }

  setMenuStyle():void {
    const topNav = document.getElementById('top-navigation');
    const menuUl = topNav.getElementsByTagName('ul')[0];
    const liHeight = 35;
    const maxUlHeight = liHeight * 8;

    if (!this.mobileMenuVisible) {
      menuUl.removeAttribute('style');
    }

    if (this.mobileMenuVisible && screen.width < 990) {
      menuUl.style.height = `${maxUlHeight}px`;
    }
  }
}