import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-koszyk',
  imports: [CommonModule],
  templateUrl: './koszyk.component.html',
  styleUrl: './koszyk.component.css'
})
export class KoszykComponent {
  @Input() wartoscKoszyka = 0;
  @Output() wyczysc = new EventEmitter<void>();

  onWyczyscKoszyk() {
    this.wyczysc.emit();
  }
}
