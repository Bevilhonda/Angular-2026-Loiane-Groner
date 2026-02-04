import { Component, computed, effect, signal } from '@angular/core';

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

protected count = signal(0);

protected doubleCount = computed(() => this.count() * 2);

private readonly countLog = effect(() => {
  console.log('Count changed:',this.count)
});

protected increatCounter(){
  this.count.update(value => value + 1);
}

protected decreaseCounter(){
  this.count.update(value => value - 1);

}

protected resetCount(){
  this.count.set(0);
}

}
