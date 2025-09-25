 export class InventarioViejo {
  private items: string[] = [];

  agregarItem(nombre: string) {
    this.items.push(nombre);
  }

  getItems() {
    return this.items;
  }
}



