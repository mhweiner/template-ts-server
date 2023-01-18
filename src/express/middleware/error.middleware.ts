import {Request, Response, NextFunction} from 'express';
import {logger} from 'jsout';
import {badRequest, forbidden, notFound, serverError, unauthorized} from '../response.express';
import {Forbidden, NotFound, Unauthorized, UserError} from '../../domain/error';

export default function errorMiddleware(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
): void {

    const {url, method} = req;

    switch (err.constructor) {

        case SyntaxError:
            badRequest(res, new UserError('MALFORMED_JSON', {}));
            break;
        case UserError:
            badRequest(res, err as UserError<any>);
            break;
        case Unauthorized:
            unauthorized(res);
            break;
        case Forbidden:
            forbidden(res);
            break;
        case NotFound:
            notFound(res);
            break;
        default:
            logger.error(undefined, err, undefined, {url, method});
            serverError(res);

    }
    next();

}
