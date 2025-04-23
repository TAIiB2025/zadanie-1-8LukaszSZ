import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProduktComponent } from './produkt/produkt.component';
import { Produkt } from './models/produkt.class';
import { KoszykComponent } from './koszyk/koszyk.component';
import { NaglowekDirective } from './naglowek.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ProduktComponent, KoszykComponent, NaglowekDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taiib_zadanie';

  produkty: Produkt[] = [
    new Produkt('Laptop', 4000, new Date(2024, 3, 15), true),
    new Produkt('Myszka', 80, new Date(2023, 9, 5), false),
    new Produkt('Monitor', 899.99, new Date(2022, 5, 10), true),
    new Produkt('Książka', 49.99, new Date(2021, 11, 3), false),
    new Produkt('Słuchawki', 299.00, new Date(2024, 1, 18), false),
  ];

  wartoscKoszyka = 0;
  pokazProdukty = true;

  onDodanoDoKoszyka(produkt: Produkt) {
    this.wartoscKoszyka += produkt.cena;
  }

  onWyczyscKoszyk() {
    this.wartoscKoszyka = 0;
    this.produkty.forEach(p => p.liczbaSztuk = 0);
  }

  toggleWidokProduktow() {
    this.pokazProdukty = !this.pokazProdukty;
  }

}
