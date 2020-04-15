"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const filtro_excepciones_negocio_1 = require("./infraestructura/excepciones/filtro-excepciones-negocio");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const logger = app.get(common_1.Logger);
    app.useGlobalFilters(new filtro_excepciones_negocio_1.FiltroExcepcionesDeNegocio(logger));
    const swaggerOptions = new swagger_1.DocumentBuilder()
        .setTitle('Bloque Arquitectura Hexagonal Node')
        .setDescription('Bloque que hace uso de Nest.js para la creación de API\'s con Node.js')
        .setVersion('1.0')
        .build();
    const swaggerDocument = swagger_1.SwaggerModule.createDocument(app, swaggerOptions);
    swagger_1.SwaggerModule.setup('api', app, swaggerDocument);
    app.enableCors();
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map