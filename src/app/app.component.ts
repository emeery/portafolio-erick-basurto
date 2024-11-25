import { BreakpointObserver } from '@angular/cdk/layout';
import {
  Component,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

declare var VANTA: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile= true;


  constructor(private observer: BreakpointObserver) {}

  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  ngAfterViewInit(): void {
    VANTA.HALO({
      el: '#vanta', // element selector string or DOM object reference
      mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00
    })
  }

  toggleMenu() {
    if(this.isMobile){
      this.sidenav.toggle();
    } else {
      // do nothing for now
    }
  }


}
