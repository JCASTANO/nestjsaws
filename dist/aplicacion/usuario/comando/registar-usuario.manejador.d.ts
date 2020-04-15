import { ServicioRegistrarUsuario } from 'src/dominio/usuario/servicio/servicio-registrar-usuario';
import { ComandoRegistrarUsuario } from './registrar-usuario.comando';
export declare class ManejadorRegistrarUsuario {
    private _servicioRegistrarUsuario;
    constructor(_servicioRegistrarUsuario: ServicioRegistrarUsuario);
    ejecutar(comandoRegistrarUsuario: ComandoRegistrarUsuario): Promise<void>;
}
