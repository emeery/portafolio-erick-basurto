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
export class AppComponent  {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile = true;


  constructor(private observer: BreakpointObserver) { }

  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if (screenSize.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }



  toggleMenu() {
    if (this.isMobile) {
      this.sidenav.toggle();
    } else {
      // do nothing for now
    }
  }


}
