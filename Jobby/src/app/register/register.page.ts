import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../shared/usuario.model';
import { Observable } from 'rxjs';
import { UsuarioService } from '../shared/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  usuario = new UsuarioModel("","","","","","","","")

  constructor(private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router) { }
    registrarUsuario(){
      this.usuarioService.agregarUsuario(this.usuario).subscribe(
        (response)=>{
          console.log('usuario registrado con exito', response);
        },
        (error)=>{
          console.log('Error al registrarse', error);
        }
      )
    }
  
  ngOnInit() {
    
    
  }

}
