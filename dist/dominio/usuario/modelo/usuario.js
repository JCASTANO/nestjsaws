"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_longitud_invalida_1 = require("../../excepciones/error-longitud-invalida");
const NUMERO_MINIMO_CARACTERES_CLAVE = 4;
class Usuario {
    constructor(nombre, clave, fechaCreacion) {
        this.validarTamanoClave(clave);
        this._nombre = nombre;
        this._clave = clave;
        this._fechaCreacion = fechaCreacion;
    }
    validarTamanoClave(clave) {
        if (clave.length < NUMERO_MINIMO_CARACTERES_CLAVE) {
            throw new error_longitud_invalida_1.ErrorLongitudInvalida(`El tamaño mínimo de la clave debe ser ${NUMERO_MINIMO_CARACTERES_CLAVE}`);
        }
    }
    get nombre() {
        return this._nombre;
    }
    get clave() {
        return this._clave;
    }
    get fechaCreacion() {
        return this._fechaCreacion;
    }
}
exports.Usuario = Usuario;
//# sourceMappingURL=usuario.js.map