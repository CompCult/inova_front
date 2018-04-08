import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {



  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openLg(content) {
   this.modalService.open(content, { size: 'lg' });
 }

}
