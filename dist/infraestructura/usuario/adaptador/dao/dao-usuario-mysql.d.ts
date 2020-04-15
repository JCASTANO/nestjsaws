import { EntityManager } from 'typeorm';
import { DaoUsuario } from 'src/dominio/usuario/puerto/dao/dao-usuario';
import { UsuarioDTO } from 'src/dominio/usuario/modelo/usuario.dto';
export declare class DaoUsuarioMysql implements DaoUsuario {
    private readonly entityManager;
    constructor(entityManager: EntityManager);
    listar(): Promise<UsuarioDTO[]>;
}
