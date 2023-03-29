import Persona from "./PersonaInterfase"

export default abstract class MiembroClub implements Persona {
    nombre:string;
    apellido:string;
    fechaNacimiento:string;
    documento:number;
    telefono:number;
    miembroDesde:string; // fecha de alta del socio
    constructor(nombre:string,apellido:string,fechaNacimiento:string,documento:number,telefono:number){
            this.nombre=nombre;
            this.apellido=apellido;
            this.fechaNacimiento=new Date(fechaNacimiento).toLocaleDateString();
            this.documento=documento;
            this.telefono=telefono;
            this.miembroDesde=new Date().toLocaleDateString();

    }

}