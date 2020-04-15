import { ComandoRegistrarUsuario } from 'src/aplicacion/usuario/comando/registrar-usuario.comando';
import { ManejadorRegistrarUsuario } from 'src/aplicacion/usuario/comando/registar-usuario.manejador';
import { ManejadorListarUsuario } from 'src/aplicacion/usuario/consulta/listar-usuarios.manejador';
import { UsuarioDTO } from 'src/dominio/usuario/modelo/usuario.dto';
export declare class UsuarioControlador {
    private readonly _manejadorRegistrarUsuario;
    private readonly _manejadorListarUsuario;
    constructor(_manejadorRegistrarUsuario: ManejadorRegistrarUsuario, _manejadorListarUsuario: ManejadorListarUsuario);
    crear(comandoRegistrarUsuario: ComandoRegistrarUsuario): Promise<void>;
    listar(): Promise<UsuarioDTO[]>;
}
