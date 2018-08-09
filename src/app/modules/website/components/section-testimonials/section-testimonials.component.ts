import { Component } from "@angular/core";

@Component({
  selector: 'app-section-testimonials',
  templateUrl: './section-testimonials.component.html',
  styleUrls: ['./section-testimonials.component.scss']
})
export class SectionTestimonials {
  activeTestimonial: number = 0;
  testimonials: Array<any> = [
    {
      imageUrl: "/assets/images/author/tst-author1.jpg",
      name: 'John Doe',
      title: 'Founder',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
    },
    {
      imageUrl: "/assets/images/author/tst-author2.jpg",
      name: 'Jane Doe',
      title: 'Co-founder',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
    },
    {
      imageUrl: "/assets/images/author/tst-author1.jpg",
      name: 'John Doe',
      title: 'Founder',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
    },
    {
      imageUrl: "/assets/images/author/tst-author2.jpg",
      name: 'Jane Doe',
      title: 'Co-founder',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
    },
  ]

  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 10000)
  }

  slidesContainerWidth() {
    return {
      width: `${100 * this.testimonials.length}%`,
      right: `${(screen.width > 990 ? 50 : 100) * this.activeTestimonial}%`
    }
  }

  slideWidth() {
    return {
      width: `${(screen.width > 990 ? 50 : 100) / this.testimonials.length}%`,
    }
  }

  nextSlide() {
    this.activeTestimonial = this.activeTestimonial + (screen.width > 990 ? 2 : 1) === this.testimonials.length ? 0 : this.activeTestimonial + 1;
  }
}