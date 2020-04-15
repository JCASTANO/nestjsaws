import { Usuario } from '../../modelo/usuario';
export declare abstract class RepositorioUsuario {
    abstract existeNombreUsuario(nombre: string): Promise<boolean>;
    abstract guardar(usuario: Usuario): any;
}
