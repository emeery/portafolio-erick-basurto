import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from "gsap/TextPlugin";
declare var VANTA: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})


export class AboutComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

  }  
  ngAfterViewInit(): void {
    gsap.registerPlugin(TextPlugin, ScrollTrigger);
    
    gsap.to(`#title`, {
      duration: 4,
      color:'honeydew',
      fontSize: 90,
      text: `Erick Basurto`,
      ease: `power2.in`
    });

    gsap.to(`#subtitle`, {
      duration: 5,
      color:'honeydew',
      fontSize: 20,
      text: `Ingeniero en Gestión Empresarial`,
      ease: `circ.in`
    });


    VANTA.RINGS({
      el: '#vanta-exp', // element selector string or DOM object reference
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00

    })
  }

}
