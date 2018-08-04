import { Component } from "@angular/core";

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss'],
})
export class TopNavigation {
  mobileMenuVisible: boolean = false;
  menuItems: Array<any> = [
    {
      label: "Home",
      anchor: "#Home"
    },
    {
      label: "Features",
      anchor: "#Features"
    },
    {
      label: "Screenshot",
      anchor: "#Screenshot"
    },
    {
      label: "Pricing",
      anchor: "#Pricing"
    },
    {
      label: "Team",
      anchor: "#Team"
    },
    {
      label: "Download",
      anchor: "#Download"
    },
    {
      label: "Blog",
      anchor: "#Blog"
    },
    {
      label: "Contact",
      anchor: "#Contact"
    },
  ]

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
    const maxUlHeight = liHeight * this.menuItems.length;

    if (!this.mobileMenuVisible) {
      menuUl.removeAttribute('style');
    }

    if (this.mobileMenuVisible && screen.width < 990) {
      menuUl.style.height = `${maxUlHeight}px`;
    }
  }
}