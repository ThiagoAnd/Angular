import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal:string;//Aqui foi tipado a variavel, mas não tem necessidade
  cursos:string[]=["java","python","angular"];

  constructor() {
    this.nomePortal = "http://loiane.training.com.br";
   }

  ngOnInit(): void {
  }

}
