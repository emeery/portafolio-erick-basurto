import { HttpBackend } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
declare var VANTA: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  linkedin = '../../../assets/images/LI.png';
  constructor() { }

  ngAfterViewInit(): void {
    VANTA.FOG({
      el: '#vanta', // element selector string or DOM object reference
      mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  highlightColor: 0xc7c799,
  midtoneColor: 0xc29f97,
  lowlightColor: 0xe8e8e8,
  baseColor: 0x310000
    })
  }



}
