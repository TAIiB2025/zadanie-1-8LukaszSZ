export class Produkt {
    constructor(
      public nazwa: string,
      public cena: number,
      public dataUtworzenia: Date,
      public czyPromocja: boolean,
      public liczbaSztuk: number = 0
    ) {}
  }
  