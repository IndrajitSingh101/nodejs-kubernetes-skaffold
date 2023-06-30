import { CustomError } from "./custom-errors";

export class DatabaseConnectionError extends CustomError {
    serializeErrors() {
        return [
            {
                message: this.reason
            }
        ]
    }
    statusCode=500
    reason='Error connecting to database'
    constructor()
    {
        super();
        Object.setPrototypeOf(this,DatabaseConnectionError.prototype);
    }

   
}