export class Configuracion {
  private static instancia: Configuracion;
  private equipos: { algo1: string; algo2: string;}[] = [];

  private constructor() {}

  static obtenerInstancia(): Configuracion {
    if (!Configuracion.instancia) {
      Configuracion.instancia = new Configuracion();
    }
    return Configuracion.instancia;
  }

  set(algo1:string, algo2:string) {
    this.equipos.push({ algo1, algo2 });
  }

  get() {
    return this.equipos;
  }
}

