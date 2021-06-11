import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  url = '/api';
  constructor(private http: HttpClient) { }

  //get empleados
  getEmpleados() {
    return this.http.get(this.url);
  }

}



