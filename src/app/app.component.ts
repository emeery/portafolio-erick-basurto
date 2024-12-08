import { BreakpointObserver } from '@angular/cdk/layout';
import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
  ViewEncapsulation
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';

declare var VANTA: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent  {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  @ViewChild("content",{static:true}) content:ElementRef;
  
  isMobile = true;
  isCollapsed = true;

  
  constructor(private observer: BreakpointObserver,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.open();
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if (screenSize.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }


  open() {
      const modalRef = this.modalService.open(ModalComponent, {windowClass:'dark-modal', size: 'lg', backdrop: 'static'});
  }
  toggleMenu() {
    if(this.isMobile){
      this.sidenav.toggle();
      this.isCollapsed = false; // On mobile, the menu can never be collapsed
    } else {
      this.sidenav.open(); // On desktop/tablet, the menu can never be fully closed
      this.isCollapsed = !this.isCollapsed;
    }
  }


}
