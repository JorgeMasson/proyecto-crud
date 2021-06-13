import { Component, OnInit } from '@angular/core';
import {Empleado, EmpleadoService} from '../../SERVICIOS/empleado.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  empleado: Empleado = {
    id_empleado: '',
    nombre: '',
    curso: ''
  };

  constructor(private EmpleadoService: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
  }

  agregar() {
    delete this.empleado.id_empleado;
    
    this.EmpleadoService.addEmpleado(this.empleado).subscribe();
    this.router.navigate(['/inicio']);
  }

}
