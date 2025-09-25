import { EquipoFactory } from "./clases/Factory";


export async function runFactory() {
    const factory = new EquipoFactory();
    const equipo = factory.crearEquipo("Servidor", "Dell Power", "32GB", "Xeon");
    console.log(equipo.detalles());
}


