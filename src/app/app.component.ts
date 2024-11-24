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
constructor() {}

ngAfterViewInit(): void {
  VANTA.GLOBE({
    el: '#vanta', // element selector string or DOM object reference
    backgroundColor: 0x23153c,
    color: 0xff3f81,
    waveHeight: 20,
    shininess: 50,
    waveSpeed: 1.5,
    zoom: 0.75
  })
}


  
}
