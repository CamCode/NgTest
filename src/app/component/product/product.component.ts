import { Component, OnInit } from '@angular/core';

declare var $:any; // declarando parametro $ de jquery 

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  //name:string = "nombre";//declarar variables en TypeScript
  carrito:any=[];
  productos: any = []
  constructor() { 
    /*console.log(this.name);
    console.log($('body'));*/
    this.productos = [
      {
        id:1,
        image: "assets/product/camara.jpg",
        precioActual: 55000,
        precioAnterior: 80000,
        titulo: "cámara",
        descripcion: "camára jkshdjksahjk sjkdhjkas",
        ahorro:Math.round(((80000-55000)/80000)*100)
      },
      {
        id:2,
        image: "assets/product/radio.jpg",
        precioActual: 45000,
        precioAnterior: 60000,
        titulo: "radio",
        descripcion: "radio jkshdjksahjk sjkdhjkas",
        ahorro: Math.round(((60000-45000)/60000)*100)
      },
      {
        id:3,
        image: "assets/product/cosedora.jpg",
        precioActual: 100000,
        precioAnterior: 400000,
        titulo: "Máquina de coser",
        descripcion: "Máquina de coser jkshdjksahjk sjkdhjkas",
        ahorro: Math.round(((400000-100000)/400000)*100)
      },
      {
        id:4,
        image: "assets/product/reloj.jpg",
        precioActual: 30000,
        precioAnterior: 70000,
        titulo: "Reloj despertador",
        descripcion: "Reloj despertador jkshdjksahjk sjkdhjkas",
        ahorro: Math.round(((70000-30000)/70000)*100)
      },
      {
        id:5,
        image: "assets/product/amplificador.jpg",
        precioActual: 300000,
        precioAnterior: 700000,
        titulo: "Amplificador Marshall",
        descripcion: "Amplificador Marshall jkshdjksahjk sjkdhjkas",
        ahorro: Math.round(((700000-300000)/700000)*100)
      },
      {
        id:6,
        image: "assets/product/dsk.jpg",
        precioActual: 15000,
        precioAnterior: 30000,
        titulo: "Dsk",
        descripcion: "DSk jkshdjksahjk sjkdhjkas",
        ahorro: Math.round(((30000-15000)/30000)*100)
      },
      {
        id:7,
        image: "assets/product/maquina.jpg",
        precioActual: 150000,
        precioAnterior: 300000,
        titulo: "Máquina de escribir",
        descripcion: "Máquina de escribir jkshdjksahjk sjkdhjkas",
        ahorro: Math.round(((30000-15000)/30000)*100)
      },
      {
        id:8,
        image: "assets/product/recorder.jpg",
        precioActual: 150000,
        precioAnterior: 300000,
        titulo: "Camrecorder",
        descripcion: "Camrecorder jkshdjksahjk sjkdhjkas",
        ahorro: Math.round(((30000-15000)/30000)*100)
      }

    ]
  }
  agregar($id){
    this.carrito.push($id);
    console.log(this.carrito);
  }

  ngOnInit() {
  }

}
