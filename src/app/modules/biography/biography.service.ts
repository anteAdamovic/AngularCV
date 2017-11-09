import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BiographyService {
    constructor(private httpService: HttpService) { }

    public getBiography(): Observable<any> {
        return this.httpService.getData('biography');
    }
}
