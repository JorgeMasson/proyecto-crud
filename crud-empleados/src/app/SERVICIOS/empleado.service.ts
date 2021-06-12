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

  //get un empleado
  getUnEmpleado(id: string) {
    return this.http.get(this.url + '/' + id);
  }

  // agregar empleado
  addEmpleado(empleado: Empleado) {
    return this.http.post(this.url, empleado);
  }

  //eliminar empleado
  deleteEmpleado(id: string) {
    return this.http.delete(this.url + '/' + id);
  }

  //modificar empleado
  editEmpleado(id: string, empleado: Empleado) {
    return this.http.put(this.url + '/' + id, empleado);
  }

}

export interface Empleado {
  id_empleado?: string;
  nombre?: string;
  curso?: string;
}



