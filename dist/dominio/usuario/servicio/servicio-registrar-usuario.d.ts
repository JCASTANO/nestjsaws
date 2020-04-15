import { RepositorioUsuario } from '../puerto/repositorio/repositorio-usuario';
import { Usuario } from '../modelo/usuario';
export declare class ServicioRegistrarUsuario {
    private _repositorioUsuario;
    constructor(repositorioUsuario: RepositorioUsuario);
    ejecutar(usuario: Usuario): Promise<void>;
}
