import { IEquipo } from "../interfaces/IEquipo";



export class Servidor implements IEquipo {
  constructor(private nombre: string, private ram: string, private procesador: string) {}
  detalles() {
    return `Tipo: Servidor, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}


