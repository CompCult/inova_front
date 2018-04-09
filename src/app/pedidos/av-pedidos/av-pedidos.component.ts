import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-av-pedidos',
  templateUrl: './av-pedidos.component.html',
  styleUrls: ['./av-pedidos.component.css']
})
export class AvPedidosComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  openLg(content) {
   this.modalService.open(content, { size: 'lg' });
  }

  ngOnInit() {
  }


}
