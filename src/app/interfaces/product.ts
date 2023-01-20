export class Product {
  id: number;
  publicPrice: number;
  purchasePrice: number;
  title: string;
  descriptionProduct: string;
  note: number;
  imageURL: string;
  brand: string;

  constructor(id: number, publicPrice: number, purchasePrice: number, title: string, descriptionProduct: string, note: number, imageURL: string, brand: string) {
    this.id = id;
    this.publicPrice = publicPrice;
    this.purchasePrice = purchasePrice;
    this.title = title;
    this.descriptionProduct = descriptionProduct;
    this.note = note;
    this.imageURL = imageURL;
    this.brand = brand;
  }
}
