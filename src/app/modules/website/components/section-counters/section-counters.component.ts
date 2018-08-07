import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-section-counters',
  templateUrl: './section-counters.component.html',
  styleUrls: ['./section-counters.component.scss']
})
export class SectionCounters implements OnInit {
  counters: Array<any> = [
    {
      icon: 'fa fa-users',
      label: 'Happy clients',
      number: 0,
      maxNumber: 10,
      startNumber: 0,
      suffix: 'k'
    },
    {
      icon: 'fa fa-book',
      label: 'Projects completed',
      number: 0,
      maxNumber: 978,
      startNumber: 0,
    },
    {
      icon: 'fa fa-coffee',
      label: 'Cups of coffee',
      number: 0,
      maxNumber: 150,
      startNumber: 0,
      suffix: 'k'
    },
    {
      icon: 'fa fa-trophy',
      label: 'Contracts won',
      number: 0,
      maxNumber: 100,
      startNumber: 0,
    }
  ]

  countersTriggered: boolean = false;

  ngOnInit() {
    document.addEventListener('scroll', event => {
      if (this.countersTriggered) {
        return;
      }

      
      if (window.pageYOffset + window.innerHeight > document.getElementById('section-counters').offsetTop) {
        this.startCounterAnimation();
        this.countersTriggered = true;
      }

      document.removeEventListener('scroll', function () {});
    })
  }

  startCounterAnimation() {
    for (const counter of this.counters) {
      const increment = counter.maxNumber / 100;
      let interval = setInterval(function() {
        if (counter.number >= counter.maxNumber) {
          return clearInterval(interval);
        }

        if (counter.number + increment >= counter.maxNumber) {
          counter.number = counter.maxNumber;
        } else {
          counter.number += increment;
        }
      }, 25)
    }
  }
}