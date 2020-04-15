import { RepositorioUsuario } from 'src/dominio/usuario/puerto/repositorio/repositorio-usuario';
import { Usuario } from 'src/dominio/usuario/modelo/usuario';
import { UsuarioEntidad } from '../../entidad/usuario.entidad';
import { Repository } from 'typeorm';
export declare class RepositorioUsuarioMysql implements RepositorioUsuario {
    private readonly repositorio;
    constructor(repositorio: Repository<UsuarioEntidad>);
    existeNombreUsuario(nombre: string): Promise<boolean>;
    guardar(usuario: Usuario): Promise<void>;
}
