const fs=require('fs')
import readLineSync from 'readline-sync'
import { Jugador } from "./Jugador"
import { Deporte } from './Deportes'

export default class GestorClub{
   
   data(){ return JSON.parse(fs.readFileSync('./socio.json'))}

   setagregarSocio(){
    let nombre=readLineSync.question('Escriba el nombre del socio:--> ');
    let apellido=readLineSync.question('Escriba el apellido del socio:--> ');
    let fechaNacimiento=readLineSync.question('Escriba fecha de nacimiento en formato//yyyy//mm//dd del socio:--> ');
    let documento=Number(readLineSync.question('escriba dni del socio sin puntos:--> '));
    let telefono=Number(readLineSync.question('escriba telefono del socio:--> '));
    let dep=Object.values(Deporte);
    let deporte=readLineSync.keyInSelect(dep,'ingrese el deporte del socio:--> ');
    let juego=dep[deporte];
    let nuevoSocio= new Jugador(nombre,apellido,fechaNacimiento,documento,telefono,juego);
    let socios=[...this.data(),nuevoSocio]
    fs.writeFileSync('./socio.json',JSON.stringify(socios,null,2));
   }
    getbuscarNombre(nombre:string){
        let nombreSocio=this.data().filter((persona:{nombre:string})=>persona.nombre===nombre)
        console.log(nombreSocio)
        return nombreSocio;
    }
    
    
    getbuscarDeporte(deporte:string){
        let deporteSocio=this.data().filter((persona:{deporte:string})=>persona.deporte===deporte)
        console.log(deporteSocio)
        return deporteSocio
    }
    
    getbuscarDocumento(documento:number){
        let documentoSocio=this.data().find((persona:{documento:number})=>persona.documento===documento)
        console.log(documentoSocio)
        return documentoSocio;
    }
    getbuscarTelefono(telefono:number){
        let telefonoSocio=this.data().find((persona:{telefono:number})=>persona.telefono===telefono)
        console.log(telefonoSocio)
        return telefonoSocio;
    }

    getbuscarApellido(apellido:string){
        let apellidoSocio=this.data().filter((persona:{apellido:string})=>persona.apellido===apellido)
        console.log(apellidoSocio);
        return apellidoSocio;
    }
}