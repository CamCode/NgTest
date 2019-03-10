import { Component } from '@angular/core';

declare var $: any; // declarando parametro $ de jquery 

@Component({
  selector: 'app-prueba',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'app';
  constructor() {
    /* $(document).ready(function(){
       $('.galeria').slick({
         arrows:true,
         autoplay:true,
         centerMode: true
       });
     });*/
   
  }
}
