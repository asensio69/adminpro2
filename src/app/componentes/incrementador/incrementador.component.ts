import { Component, OnInit, Input, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtPorcentaje') txtPorcentaje :ElementRef;

  @Input() porcentaje: number = 50;
  @Input('nombre') leyenda :string = 'leyenda';

  //Emisor al componente padre
  @Output() cambioValor : EventEmitter<number> = new EventEmitter;
  constructor() { 
    
  }

  ngOnInit() {
   
  }


  onChanges( newValue:number ){
    
    this.cambioValor.emit(this.porcentaje);

    //let elemHTML = document.getElementsByName('porcentaje')[0];

    this.txtPorcentaje.nativeElement.value = this.porcentaje;
    
    console.log(this.txtPorcentaje);
  }

  cambiarValor( valor: number ){


    if(this.porcentaje >= 100){
      return;
    }

    if(this.porcentaje <= 0){
      return;
    }


    this.porcentaje = this.porcentaje + valor;
    //Envio o emito el valor desde el componente hijo al padre
    this.cambioValor.emit( this.porcentaje);
  }

}
