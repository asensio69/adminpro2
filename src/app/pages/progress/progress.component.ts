import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
//COMPONENTE PADRE
export class ProgressComponent implements OnInit {

  porcentaje: number = 50;

  constructor() { }

  ngOnInit() {
  }

  //Recibo valores del componente hijo
  actualizar( event : number){
    this.porcentaje = event;
  }

}
