import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-missoes',
  templateUrl: './missoes.component.html',
  styleUrls: ['./missoes.component.css']
})
export class MissoesComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  openLg(content) {
   this.modalService.open(content, { size: 'lg' });
 }

  ngOnInit() {
  }

}
