
import { Configuracion } from "./clases/inventarioViejo";

export async function runSingleton(){
    const conf1 = Configuracion.obtenerInstancia();
    const conf2 = Configuracion.obtenerInstancia();

    conf1.set("modo", "produccion");
    console.log(conf2.get("modo"));
} 