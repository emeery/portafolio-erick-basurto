import { AfterViewInit, Component } from '@angular/core';
declare var VANTA: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})


export class AboutComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    VANTA.RINGS({
      el: '#vanta-about', // element selector string or DOM object reference
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
