import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { GLOBAL } from '../services/global';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Tarifa } from '../modelo/tarifa';
import { forEach } from '@angular/router/src/utils/collection';
import { Registro } from '../modelo/registro';



@Component({
    selector: 'registro',
    templateUrl: './registro.component.html',
    styleUrls: ['registro.component.css']
})

export class RegistroComponent {
    tituloReg = '';
    private result: string = '';
    private ingreso: boolean;
    private ingresoMoto: boolean;
    private tarifa_seleccionada: string;// = new Tarifa("0",0,0,0,0);

    private autos: Array<Registro> = new Array<Registro>();
    private autosBusqueda: Array<Registro> = new Array<Registro>();

    private tipoVehiculo: string;
    private tarifas: Array<Tarifa> = new Array<Tarifa>();
    private placa: string;
    private cilindraje: number;
    private horaIngreso: Date;

    constructor(private _http: Http) {
        this.ingreso = true;
    }

    ngOnInit(){
        this.obtenerTarifas().map(response => response.json()).subscribe(result => {   
            if(result.code != 200){
                
                result.forEach((tarifa: Tarifa) => {
                    this.tarifas.push(tarifa);
                });

            }else{

                this.result = result.data;

            }

        },
        error => {

            console.log(<any>error);

        });
    }

    onChangeVehiculo(vehiculo){
        
        this.ingresoMoto = this.ingreso && vehiculo.target.options[vehiculo.target.selectedIndex].value == 'Moto' ? true : false;

    }

    onSubmit(){
        
        let regis: Registro = new Registro(this.tipoVehiculo, 
                                           this.tarifas.find(x => x.id == this.tarifa_seleccionada), 
                                           this.placa, 
                                           this.cilindraje, 
                                           this.horaIngreso); 

        this.guardarIngreso(regis).map(response => response.json()).subscribe(result => {   
            if(result.code != 200){
                
                

            }else{

                this.result = result.data.message;

            }

        },
        error => {

            console.log(<any>error);

        });
    }


    onSearchChange(texto){
        
    }


    Ingreso() {

        this.ingreso = true;

    }

    Salida() {

        this.ingreso = false;
        this.obtenerVehiculosParqueados();
        this.autosBusqueda = this.autos;
        

    }




    obtenerTarifas(): Observable<any>{

        let url = GLOBAL.url+'/tarifa/getAll';
        return this._http.get(url);

    }

    obtenerRegistroIngresoMotos(): Observable<any>{
        let url = GLOBAL.url+'/regmoto/getAll';
        return this._http.get(url);
    }


    obtenerRegistroIngresoCarros(): Observable<any>{
        let url = GLOBAL.url+'/regcarro/getAll';
        return this._http.get(url);
    }

    obtenerVehiculosParqueados(){
        this.autos.splice(0, this.autos.length);
        this.obtenerRegistroIngresoMotos().map(response => response.json()).subscribe(result => {   
            if(result.code != 200){
                
                result.forEach((reg: Registro) => {
                    reg.tipo = "Moto";
                    this.autos.push(reg);
                });

            }else{

                this.result = result.data;

            }

        },
        error => {

            console.log(<any>error);

        });

        this.obtenerRegistroIngresoCarros().map(response => response.json()).subscribe(result => {   
            if(result.code != 200){
                
                result.forEach((reg: Registro) => {
                    reg.tipo = "Carro";                  
                    this.autos.push(reg);
                });

            }else{

                this.result = result.data;

            }

        },
        error => {

            console.log(<any>error);

        });
    }

    guardarIngreso(registro : Registro):  Observable<any>{

        
        let url = GLOBAL.url;
        let json = JSON.stringify(registro);
        let params = json;
        let headers = new Headers({'Content-Type':'application/json'});
    

        if (registro.tipo == "Carro"){
            url += '/regcarro/insert';
        }else{
            url += '/regmoto/insert';
        }

        return this._http.post(url, params , {headers: headers});
    }
}
