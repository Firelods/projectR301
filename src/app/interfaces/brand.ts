export class Brand {
  id: number;
  title: string;
  link: string;
  imageURL: string

  constructor(id: number, title: string, link: string, imageURL: string){
    this.id = id;
    this.title = title;
    this.link = link;
    this.imageURL = imageURL;
  }
}

