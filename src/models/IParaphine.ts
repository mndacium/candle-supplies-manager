export interface IParaphine {
  
      id: string;
      price: string;
      size: string;
      date: string;
  }
  
  export class Paraphine {
  
    id: string;
      price: string;
      size: string;
      date: string;
   
    constructor(data: IParaphine) {
      this.id = data.id;
      this.price = data.price;
      this.size = data.size;
      const date = new Date(data.date)
      this.date = date.toLocaleDateString('en-GB', { year: 'numeric', day: '2-digit', month: '2-digit' });
    }
  }
  