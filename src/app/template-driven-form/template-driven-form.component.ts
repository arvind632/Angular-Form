import { Component, OnInit } from '@angular/core';
import { User }    from './user';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
 
  model = new User('Arvind','');
  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }

  submitRegistration(data){
      console.log(data);
  }

}
