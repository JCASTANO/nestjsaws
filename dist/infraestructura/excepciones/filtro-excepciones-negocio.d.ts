import { ExceptionFilter, ArgumentsHost, Logger } from '@nestjs/common';
import { ErrorDeNegocio } from 'src/dominio/excepciones/error-de-negocio';
export declare class FiltroExcepcionesDeNegocio implements ExceptionFilter {
    private logger;
    constructor(logger: Logger);
    catch(exception: ErrorDeNegocio, host: ArgumentsHost): void;
}
