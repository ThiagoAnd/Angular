import { Injectable } from '@angular/core';

@Injectable({// injectable significa que essa classe pode ser injetada em outra classe
  providedIn: 'root'
})
export class CursosService {

http

  constructor() { }

  getCursos(){
    return ['java','python','angular','pipoca'];
  }
}
