import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ConfigService } from '../utils/config.service';

@Injectable()
export class MyHeritageService {
    _baseUrl: string = '';
    constructor(private http: Http, private configService: ConfigService) {
        this._baseUrl = configService.getApiURI();
    }

    getAll(event) {
        return this.http.get(this._baseUrl + 'memberheritage/').map((res: Response) => {
            return res.json();
        }).catch(this.configService.handleError);
    }
}
