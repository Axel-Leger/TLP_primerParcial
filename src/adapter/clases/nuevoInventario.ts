import { InventarioViejo } from "./inventarioViejo";

export class AdaptadorInventario {
  private equipos: { nombre: string; tipo: string; estado: string }[] = [];

  constructor(private inventarioViejo: InventarioViejo) {}

  agregarEquipo(nombre: string, tipo: string, estado: string) {
    this.inventarioViejo.agregarItem(nombre);
    this.equipos.push({ nombre, tipo, estado });
  }

  listarEquipos() {
    return this.equipos;
  }
}