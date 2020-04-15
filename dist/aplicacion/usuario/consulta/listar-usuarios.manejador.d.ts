import { DaoUsuario } from 'src/dominio/usuario/puerto/dao/dao-usuario';
import { UsuarioDTO } from 'src/dominio/usuario/modelo/usuario.dto';
export declare class ManejadorListarUsuario {
    private _daoUsuario;
    constructor(_daoUsuario: DaoUsuario);
    ejecutar(): Promise<UsuarioDTO[]>;
}
