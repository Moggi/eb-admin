import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';


@Injectable({
    providedIn: 'root'
})
export class ServicesService extends BaseService {

  protected basepath = 'http://localhost:8000/api/services/';

}
