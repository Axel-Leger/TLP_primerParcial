import { IEquipo } from "../interfaces/IEquipo";



 export class Desktop implements IEquipo {
  constructor(private nombre: string, private ram: string, private procesador: string) {}
  detalles() {
    return `Tipo: Desktop, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}