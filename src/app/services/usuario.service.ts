
//import { Http, HttpModule, Response, Headers, RequestOptions } from '@angular/http';
//import { Http, Response, Headers } from '@angular/http';
import { HttpClient, HttpClientModule, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../modelo/usuario';
//import { GLOBAL } from './global';

@Injectable()
export class usuarioService{
    public url: string;
    
    constructor(private _http: HttpClient){
        this.url = 'http://localhost:8081/api/regmoto/parqueados';
    }

    login(){
        this._http.get(this.url).subscribe(
            result =>{
                console.log(result);
            },
            error => {
    
            });
    }
}
