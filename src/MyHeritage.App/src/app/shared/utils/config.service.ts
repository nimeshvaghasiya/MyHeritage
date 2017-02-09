import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'

@Injectable()
export class ConfigService {

    _apiURI: string;

    constructor() {
        this._apiURI = 'http://localhost:5000/api/';
    }

    getApiURI() {
        return this._apiURI;
    }

    getApiHost() {
        return this._apiURI.replace('api/', '');
    }    
    
    handleError(error: any) {
        var applicationError = error.headers.get('Application-Error');
        var serverError = error._body;
        var modelStateErrors: string = '';

        if (!serverError.type) {
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }

        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
        return Observable.throw(applicationError || modelStateErrors || 'Server error');
    }
}
