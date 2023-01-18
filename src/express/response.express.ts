import {Response} from 'express';
import {ErrorResponse} from '../types/ErrorResponse';
import {UserError} from '../domain/error';

export function ok(res: Response): void {

    res.status(200).send('OK');

}

export function badRequest<D>(res: Response, error: UserError<D>): void {

    const data: ErrorResponse = {
        error: {
            message: error.message,
            data: error.data,
        },
    };

    res.status(400).json(data);

}

export function unauthorized(res: Response): void {

    res.status(401).send('Unauthorized');

}

export function forbidden(res: Response): void {

    res.status(403).send('Forbidden');

}

export function notFound(res: Response): void {

    res.status(404).send('Not Found');

}

export function serverError(res: Response): void {

    res.status(500).send('Internal Server Error');

}
