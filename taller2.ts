//DECLARACION DE VARIABLES
let numero : number ;
let lista : number[];
let decision : boolean;
let texto : string;

let automovil: object ={
    marca:"Mazda",
    modelo:"CX-5",
    año: 2023
}
type Automovil = {
    marca: string,
    modelo: string,
    año: number
}

//CONDICIONALES
//hacer un programa que dependiendo del mes dado en numero nos diga la estacion 

let mes = 10;
let estacion = "Estacion no encontrada"
if (mes==1 || mes==12 || mes==11){
    estacion = "Invierno";
    console.log("La estacion es: "+estacion)
}else if(mes==2|| mes==3 || mes==4){
    estacion = "Primavera";
    console.log("La estacion es: "+estacion)
}else if(mes==5|| mes==6 || mes==7){
    estacion = "Verano";
    console.log("La estacion es: "+estacion)
}else if(mes==8|| mes==9 || mes==10){
    estacion = "Otoño";
    console.log("La estacion es: "+estacion)
}else{
    console.log(estacion)
}