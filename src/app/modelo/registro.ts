import { Tarifa } from "./tarifa";
import { DatePipe } from "@angular/common/src/pipes/date_pipe";

export class Registro{
    constructor(
        public tipo: string,
        public tarifa: Tarifa,
        public placa: string,
        public cilindraje: number,
        public horaIngreso: Date
    ){
        
    }
}