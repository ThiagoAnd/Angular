import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {
  livro: any ={
    titulo: 'Aprendendo Java',
    numeroPaginas: 340,
    preco: 44.99,
    lancamento: new Date(2016,5,23)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
