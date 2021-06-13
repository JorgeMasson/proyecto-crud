import { Component, OnInit } from '@angular/core';
import {Empleado, EmpleadoService} from '../../SERVICIOS/empleado.service';
import {Router, ActivatedRoute} from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  empleado: Empleado = {
    id_empleado: '',
    nombre: '',
    curso: ''
  };

  constructor(private EmpleadoService: EmpleadoService, 
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada = <string>this.activatedRoute.snapshot.params.id;
    console.log('id de entrada' + id_entrada);

    if(id_entrada) {
      this.EmpleadoService.getUnEmpleado(id_entrada).subscribe(
          res=>{
          this.empleado = res[0];
          console.log(res);
        },
        err=>console.log(err)
      );
    }
  }

  modificar() {
    this.EmpleadoService.editEmpleado(this.empleado.id_empleado, this.empleado).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    );
    this.router.navigate(['/inicio']);
  }

  inicio() {
    this.router.navigate(['/inicio']);
  }

}
