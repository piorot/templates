import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Template } from './infrastructure/template';
import { TemplatesService } from './infrastructure/templates.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cobiro';
  templates$: Observable<Template[]>;

  constructor(private templateService: TemplatesService){
    this.templates$ = this.templateService.getTemplates();
  }
}
