import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [trigger('fade', [ 
    transition('void => *', [
      style({ opacity: 0 }), 
      animate(6000, style({opacity: 1}))
    ]) 
  ])]
})
export class WelcomeComponent implements OnInit {

  currentSection: any;

  constructor() { }

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray("section").forEach((section: any) => {
      section.bg = section.querySelector(".bg");
      gsap.to(section.bg, {
        backgroundPosition: `50% ${innerHeight / 2}px`,
        ease: "none",
        scrollTrigger: {
          // Trigger the animation as soon as the section comes into view
          trigger: section, 
          scrub: true
        }
      });
    });  
  }

}
