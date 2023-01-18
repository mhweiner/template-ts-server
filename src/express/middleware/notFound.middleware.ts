import {Request, Response} from 'express';
import {notFound} from '../response.express';

export default function notFoundMiddleware(req: Request, res: Response): void {

    notFound(res);

}
