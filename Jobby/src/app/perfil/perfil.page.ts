import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario: Observable<UsuarioModel[]> | undefined
  id = ''

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuario = this.usuarioService.obtenerUsuario(this.id);
  }

}
