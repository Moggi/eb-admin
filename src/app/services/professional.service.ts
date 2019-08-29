import { Injectable } from '@angular/core';

import { BaseService } from './base.service';


@Injectable({
    providedIn: 'root'
})
export class ProfessionalsService extends BaseService {

    protected basepath = 'http://localhost:8000/api/professionals/';

}
