import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-q-respostas',
  templateUrl: './q-respostas.component.html',
  styleUrls: ['./q-respostas.component.css']
})
export class QRespostasComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  openLg(content) {
   this.modalService.open(content, { size: 'lg' });
 }

  ngOnInit() {
  }

}
