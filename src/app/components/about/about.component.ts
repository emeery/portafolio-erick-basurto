import { AfterViewInit, Component } from '@angular/core';
declare var VANTA: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})


export class AboutComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    VANTA.HALO({
      el: '#vanta', // element selector string or DOM object reference
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
    })
  }

}
