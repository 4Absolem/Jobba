export class UsuarioModel{
    constructor(
        public id_usuario: string,
        public correo_electronico: string,
        public password: string,
        public primer_nombre: string,
        public telefono: string,
        public img_perfil: string,
        public fecha_crecion: string,
        public fecha_nacimiento: string
    ){}
       

    
}