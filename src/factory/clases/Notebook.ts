import { IEquipo } from "../interfaces/IEquipo";

 export class Notebook implements IEquipo {
  constructor(private nombre: string, private ram: string, private procesador: string) {}
  detalles() {
    return `Tipo: Notebook, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}