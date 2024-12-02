import { Component, AfterViewInit, OnInit} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger);
declare var VANTA: any;


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit, AfterViewInit {
  
  ngAfterViewInit(): void {

    gsap.registerPlugin(TextPlugin, ScrollTrigger);
    
    gsap.to(`#title`, {
      duration: 1,
      color:'honeydew',
      fontSize:55,
      text: `EXPERIENCIA`,
      ease: `power2.in`
    });

    VANTA.RINGS({
      el: '#vanta', // element selector string or DOM object reference
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00

    })
  }

  ngOnInit() {
    //this.setupGsap();
  }

 



}
