import { UsuarioDTO } from '../../modelo/usuario.dto';
export declare abstract class DaoUsuario {
    abstract listar(): Promise<UsuarioDTO[]>;
}
