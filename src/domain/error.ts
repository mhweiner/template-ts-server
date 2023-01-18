export class ErrorWithData<D> extends Error {

    data: D;

    constructor(message: string, data: D) {

        super(message);
        Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
        this.name = this.constructor.name;
        this.data = data;

    }

}

export class SimpleError extends Error {

    constructor() {

        super(new.target.name);
        Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
        this.name = this.constructor.name;

    }

}

export class UserError<D> extends ErrorWithData<D> {}
export class Unauthorized extends SimpleError {}
export class NotFound extends SimpleError {}
export class Forbidden extends SimpleError {}
export class ServerError<D> extends ErrorWithData<D> {}
export class PGDBError<D> extends ErrorWithData<D> {}
