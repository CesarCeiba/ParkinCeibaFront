import { Component, OnInit } from '@angular/core';
//import { usuarioService } from '../services/usuario.service';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Usuario } from '../modelo/usuario';


@Component({
    selector: 'sesion',
    templateUrl: 'sesion.component.html',
    styleUrls: ['sesion.component.css']//,
    //providers: [usuarioService]
})

export class SesionComponent implements OnInit {
    username: string = "cesarvelasquez";
    password: string = "123";
    res: string;
    public _usuario: Usuario;

    constructor(
        private _http: Http//Client    
        //_usuarioService: usuarioService
    ){
        this._usuario = new Usuario('','','');
    }

    login(){
        let json = JSON.stringify(this._usuario);
        let params = 'json='+json;
        //let cabeceras = {headers : new /*Http*/Headers({'Content-Type':'application/json'})};
        let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded' });
        
        this._http.post('http://localhost:8081/api/usuario/login',params, {headers: headers})
            .map(
                response => response.json()
            ).subscribe(
                result => {
                    console.log(result);
                },
                error => {

                }
            );
    }



    /*onSubmit(){
        let json = JSON.stringify(this._usuario);
        let params = 'json='+json;
        this._http.post('http://localhost:8081/api/usuario/login', params, {responseType:'text'})
             .subscribe(
               (data:any) => {
                  alert(data)
                  location.reload();
               }
             );
         
        
          }*/




    ngOnInit(): void{
        
        /*this._http.get('http://localhost:8081/api/regmoto/parqueados').subscribe(
        result =>{
            console.log(result);
        },
        error => {

        });*/

        //console.log("usuario: "+this.usuario+", "+"password: "+this.password);
    }

}
