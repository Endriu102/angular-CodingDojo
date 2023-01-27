import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'przycisk',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  numerek: number = 0;
  @Input() nazwa: string | number;
  dodajTekst() {
    this.numerek++;
    this.nazwa = 'kliknąłeś:' + this.numerek + ' razy';
    window.alert('czego klikasz?');
  }
}
