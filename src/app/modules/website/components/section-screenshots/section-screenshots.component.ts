import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-section-screenshots',
  templateUrl: './section-screenshots.component.html',
  styleUrls: ['./section-screenshots.component.scss']
})
export class SectionScreenshots implements OnInit {
  activeSlide: number = 0;
  imageSlides: Array<any> = [
    {
      imageUrl: "/assets/images/mobile/screen-slider/screen1.jpg",
    },
    {
      imageUrl: "/assets/images/mobile/screen-slider/screen2.jpg",
    },
    {
      imageUrl: "/assets/images/mobile/screen-slider/screen3.jpg",
    },
    {
      imageUrl: "/assets/images/mobile/screen-slider/screen4.jpg",
    },
    {
      imageUrl: "/assets/images/mobile/screen-slider/screen5.jpg",
    },
  ]

  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 3000)
  }

  slidesContainerWidth() {
    return {
      width: `${100 * this.imageSlides.length}%`,
      right: `${100 * this.activeSlide}%`
    }
  }

  slideWidth() {
    return {
      width: `${100 / this.imageSlides.length}%`,
    }
  }

  nextSlide() {
    this.activeSlide = this.activeSlide + 1 === this.imageSlides.length ? 0 : this.activeSlide + 1;
  }


}