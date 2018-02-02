export class Tarifa{

    constructor(
        public valorHoraCarro: number,
        public valorHoraMoto: number,
        public valorDiaCarro: number,
        public valorDiaMoto: number
    ){}

    public getvalorHoraCarro(){
        return this.valorHoraCarro;
    }
}