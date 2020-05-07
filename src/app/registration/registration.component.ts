import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private apiService: ApiService){}
  

  hero = { name: '' };

  heroForm1: FormGroup;

  ngOnInit(): void {
    this.heroForm1 = new FormGroup({
      'name': new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4)
      ]),
    });


    
    this.apiService.getSeat().subscribe((result)=>{
      console.log(result);
    })
  }

  get name() { 
    return this.heroForm1.get('name'); 
  }

  SubmitRegistrationForm(data){
    console.log(data.fname);
  }


  
}
