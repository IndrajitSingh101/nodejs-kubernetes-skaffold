import { ValidationError } from 'express-validator';
import {CustomError } from './custom-errors';
export class RequestValidationError extends Error implements CustomError{
    statusCode=400;
    constructor(public errors: ValidationError[]){
        super();
        Object.setPrototypeOf(this,RequestValidationError.prototype);
    }

    serializeErrors(){
        return this.errors.map(err=>{
            return {message: err.msg, field: err}
        })
    }
}