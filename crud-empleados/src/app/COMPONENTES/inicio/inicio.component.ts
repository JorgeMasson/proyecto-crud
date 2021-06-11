import { Component, OnInit } from '@angular/core';
import {EmpleadoService} from '../../SERVICIOS/empleado.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private EmpleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.listarEmpleado()
  }

  listarEmpleado() {
    this.EmpleadoService.getEmpleados().subscribe(
      res=>{
        console.log(res)
      },
      err => console.log(err)
    );
  }

}
