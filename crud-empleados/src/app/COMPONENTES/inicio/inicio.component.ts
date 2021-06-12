import { Component, OnInit } from '@angular/core';
import {EmpleadoService, Empleado} from '../../SERVICIOS/empleado.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //variable
  ListarEmpleado: Empleado[] | undefined;

  constructor(private EmpleadoService: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
    this.listarEmpleado()
  }

  listarEmpleado() {
    this.EmpleadoService.getEmpleados().subscribe(
      res=>{
        console.log(res);
        this.ListarEmpleado = <any>res;
      },
      err => console.log(err)
    );
  }

  eliminar(id: string) {
    this.EmpleadoService.deleteEmpleado(id).subscribe(
      res=>{
        console.log('Empleado eliminado');
        this.listarEmpleado();
      },
      err=> console.log(err));
  }

  modificar(id: string) {
    this.router.navigate(['/edit/' + id]);
  }

}
