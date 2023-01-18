import {Request} from 'express';

export function getBearerToken(req: Request): string | false {

    const authStr = req.headers.authorization;

    if (!authStr) return false;

    const strArr = authStr.split(' ');

    if (strArr[0].toLowerCase() !== 'bearer') return false;

    return strArr[1];

}
