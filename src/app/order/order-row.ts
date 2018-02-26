export class OrderRow {

  constructor(public title?: string, public author?: string, public price?: number, public quantity: number = 1) {}

  getHTPrices(): number {
    return this.price * this.quantity;
  }

  getTTCPrices(): number {
    return this.getHTPrices() * 1.055;
  }
}
