import { InventarioViejo } from "./clases/inventarioViejo";
import { AdaptadorInventario } from "./clases/nuevoInventario";

export async function runAdapter() {
    const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Router Cisco", "Red", "disponible");
console.log(adaptador.listarEquipos());
}