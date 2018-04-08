import { Component, OnInit } from '@angular/core';

import{ NgForm } from '@angular/forms';

@Component({
  selector: 'app-nv-usuario',
  templateUrl: './nv-usuario.component.html',
  styleUrls: ['./nv-usuario.component.css']
})
export class NvUsuarioComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }

  criarUsuario(userForm: NgForm): void{
    console.log(userForm.value);

  }

}
