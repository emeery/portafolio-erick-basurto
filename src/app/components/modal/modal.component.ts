import { Component, OnInit, Input, Output, EventEmitter, inject, TemplateRef } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  private modalService = inject(NgbModal);

  constructor(
    public activeModal: NgbActiveModal
  ) { }


}
