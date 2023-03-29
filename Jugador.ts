import { Deporte } from "./Deportes";
import MiembroClub from "./AbstractMiembroClub";
export class Jugador extends MiembroClub{
    deporte:Deporte;

    constructor(nombre:string,apellido:string,fechaNacimiento:string,documento:number,telefono:number,deporte:Deporte){
        super(nombre,apellido,fechaNacimiento,documento,telefono)
                this.deporte=deporte;
    }

}