import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { GLOBAL } from '../services/global';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Tarifa } from '../modelo/tarifa';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
    selector: 'registro',
    templateUrl: './registro.component.html',
    styleUrls: ['registro.component.css']
})

export class RegistroComponent {
    tituloReg = '';
    private result: string = '';
    public ingreso: boolean;
    private tarifas: Array<Tarifa> = new Array<Tarifa>();

    constructor(private _http: Http) {
        this.ingreso = true;
    }

    ngOnInit(){
        this.obtenerTarifas().map(response => response.json()).subscribe(result => {   
            if(result.code != 200){
                
                result.forEach((tarifa: Tarifa) => {
                    console.log(tarifa);
                    this.tarifas.push(tarifa);
                });
                
                this.tarifas.forEach((item: Tarifa) =>{
                    console.log(item);
                });
            }else{
                this.result = result.data;
            }

        },
        error => {
            console.log(<any>error);
        });
    }

    Ingreso() {
        this.ingreso = true;
    }

    Salida() {
        this.ingreso = false;
    }


    obtenerTarifas(): Observable<any>{
        let url = GLOBAL.url+'/tarifa/getAll';
        console.log(url);
        return this._http.get(url);
    }
}
