export declare class Usuario {
    private _nombre;
    private _clave;
    private _fechaCreacion;
    constructor(nombre: string, clave: string, fechaCreacion: Date);
    private validarTamanoClave;
    get nombre(): string;
    get clave(): string;
    get fechaCreacion(): Date;
}
