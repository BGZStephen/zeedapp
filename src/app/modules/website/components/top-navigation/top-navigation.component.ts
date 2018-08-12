import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss'],
})
export class TopNavigation implements OnInit {
  mobileMenuVisible: boolean = false;
  menuItems: Array<any> = [
    {
      label: "Home",
      anchor: "section-intro"
    },
    {
      label: "Features",
      anchor: "section-features"
    },
    {
      label: "Screenshot",
      anchor: "section-screenshots"
    },
    {
      label: "Pricing",
      anchor: "section-pricing"
    },
    {
      label: "Team",
      anchor: "section-team"
    },
    {
      label: "Download",
      anchor: "section-app-download"
    },
    {
      label: "Blog",
      anchor: "section-news"
    },
    {
      label: "Contact",
      anchor: "section-contact"
    },
  ]

  menuItemActive = this.menuItems[0];

  ngOnInit() {
    this.setActiveMenuItemScrollListener();
  }

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
  
  scrollToAnchor(anchor: string) {
    const element = document.getElementById(anchor);
    window.scrollTo({left: 0, top: element.offsetTop, behavior: 'smooth'});
  }
  
  setActiveMenuItemScrollListener() {
    window.addEventListener('scroll', () => {
      for (const menuItem of this.menuItems) {
        const menuItemAnchorOffset = document.getElementById(menuItem.anchor).offsetTop;
        if (menuItemAnchorOffset <= window.pageYOffset) {
          this.menuItemActive = menuItem;
        }
      }
    })
  }
}