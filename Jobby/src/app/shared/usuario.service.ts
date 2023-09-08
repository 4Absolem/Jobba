import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  BASE_URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  obtenerUsuario(id: string){
    return this.http.get<UsuarioModel[]>(`${this.BASE_URL}+/usuario/${id}`);
  }
  agregarUsuario(usuarios: UsuarioModel){
    return this.http.post<string>(`${this.BASE_URL}/usuario/registrar`, usuarios);
  }
}
