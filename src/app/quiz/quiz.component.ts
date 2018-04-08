import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  openLg(content) {
   this.modalService.open(content, { size: 'lg' });
 }

  ngOnInit() {
  }

}
