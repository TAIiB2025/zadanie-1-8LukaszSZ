import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produkt } from '../models/produkt.class';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produkt',
  imports: [CommonModule],
  templateUrl: './produkt.component.html',
  styleUrl: './produkt.component.css'
})
export class ProduktComponent {
  @Input() produkt!: Produkt;
  @Output() dodanoDoKoszyka = new EventEmitter<Produkt>();

  zwiety = false;

  onDodaj() {
    this.produkt.liczbaSztuk++;
    this.dodanoDoKoszyka.emit(this.produkt);
  }

  toggleWidok() {
    this.zwiety = !this.zwiety;
  }

}
