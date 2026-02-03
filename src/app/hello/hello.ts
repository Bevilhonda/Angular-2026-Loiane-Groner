import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
})
export class Hello {

 protected title = "Bem vindo ao meu site" ;

 protected isDisabled = false;

 protected onClick() : void {
  console.log('botão clicado');
  this.isDisabled = !this.isDisabled;
 }



}
