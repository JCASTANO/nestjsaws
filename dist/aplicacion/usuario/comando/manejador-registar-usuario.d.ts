import { ServicioRegistrarUsuario } from 'src/dominio/usuario/servicio/servicio-registrar-usuario';
import { ComandoRegistrarUsuario } from './comando-registrar-usuario';
export declare class ManejadorRegistrarUsuario {
    private _servicioRegistrarUsuario;
    constructor(_servicioRegistrarUsuario: ServicioRegistrarUsuario);
    ejecutar(comandoRegistrarUsuario: ComandoRegistrarUsuario): Promise<void>;
}
