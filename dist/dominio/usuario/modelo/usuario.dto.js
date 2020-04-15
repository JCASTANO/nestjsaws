"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const openapi = require("@nestjs/swagger");
class UsuarioDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { nombre: { required: true, type: () => String }, fechaCreacion: { required: true, type: () => Date } };
    }
}
exports.UsuarioDTO = UsuarioDTO;
//# sourceMappingURL=usuario.dto.js.map