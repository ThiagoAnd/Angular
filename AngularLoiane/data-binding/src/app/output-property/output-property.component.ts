import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
//import * as EventEmitter from 'events';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;
//Aqui vamos declarar uma variavel do tipo emissor de valor, ela sera responsavel por enviar um valor para o componente pai do output
//property.component, que é o data-binding.component, ou seja, se algum metodo incrementa ou decrementa for chamado, sera enviado um novo valor
//Para expor esse evento não basta só colocar new EventEmitter, tem que colocar o decorator @Output
  @Output() mudouValor = new EventEmitter();

  incrementa(){
    this.valor++;
    //vamos emitir o evnto
    this.mudouValor.emit({novoValor:this.valor});
  }

  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor:this.valor});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
