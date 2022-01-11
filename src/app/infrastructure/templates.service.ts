import { Template } from './template';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TemplatesService {

  constructor(private httpClient: HttpClient) { }

  getTemplates(): Observable<Template[]>{
    return this.httpClient.get<Template[]>('https://cobiro.s3-eu-west-1.amazonaws.com/json/prod/templates.json');
  }

}




