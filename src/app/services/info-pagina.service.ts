import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InfoPagina} from '../interfaces/info_pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
info: InfoPagina = {};
cargada = false;
equipo: any [] = [];

  constructor(private http: HttpClient) {
// console.log('Servicio de infoPagina listo');
    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo() {
    // Leer archivo JSON
this.http.get('assets/data/data-pagina.json')
.subscribe ( (resp: InfoPagina) => {
  this.cargada = true;
  this.info = resp;
 // console.log(resp);
  // console.log( resp['mail'] );
  });
  }

private cargarEquipo() {
    // Leer archivo JSON
    this.http.get('https://angular-html-fc095.firebaseio.com/Equipo.json')
    .subscribe ( (resp: any[]) => {
      this.equipo = resp;
      // console.log(resp);
      // console.log( resp['mail'] );
});

}
}