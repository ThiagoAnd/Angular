import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  //Voce pode tipar ou não a variavel
  valorAtualInput:string = "";
  valorSalvoEnter: string = "";
  valorBlur: string = "";
  isMouseBoolean: boolean = false;
  nome:string="abc";
  pessoa:any ={
    nome:"nenhum",
    idade:0
  }
  nomeCurso: string="Angular";
  url:string ="http://loiane.training";
  //urlImagem = "http://lorempixel.com/400/200/nature/";
  urlImagem = "data:image/png;base64,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";

  getValor(){
    return 2;
  }

  metodoClicar(){
    alert('botao clicado')
  }

  metodoKeyUpEnter(valor){
this.valorSalvoEnter=valor
  }

  metodoBlurComVariavelLocal(valor){
this.valorBlur=valor
  }

  metodoMouseOver(){
    this.isMouseBoolean = !this.isMouseBoolean
  }
  

  //para usar o intelli sense (auto complete) vc pode tipar a variavel que esta no metodo aqui como keyboardevent
  metodoKeyUp(elemento: KeyboardEvent){
    
        //O elemento é do tipo keyboardEvent, mas o elemento.target é do tipo htmlInputElement, então para vc conseguir ir
  //passando pelas camadas até chegar ao value, vc tem que tipar até o target, como mostra abaixo e não assim: elemento.target.value
      //console.log(elemento.target.value);
      console.log((<HTMLInputElement>elemento.target).value);
      this.valorAtualInput = (<HTMLInputElement>elemento.target).value;

  }

  constructor() { }

  ngOnInit(): void {
  }

}
