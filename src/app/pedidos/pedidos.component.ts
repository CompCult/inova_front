import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  openLg(content) {
   this.modalService.open(content, { size: 'lg' });
 }

  ngOnInit() {
  }


}
