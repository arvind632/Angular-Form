import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  registrationForm : FormGroup;
  
  constructor(private fb:FormBuilder) { 

    this.registrationForm = fb.group({
       'name': new FormControl('',[Validators.required,Validators.minLength(4),Validators.pattern('[a-zA-Z ]*')]),
       'email': new FormControl('',[Validators.required,Validators.minLength(6),Validators.email]),
       'mobile': new FormControl('',[Validators.required]),
       address:fb.group({
          city:new FormControl('',[Validators.required]),
          zipcode:new FormControl(),
       }),
       languages: fb.array([
        this.fb.control(''),
      ]),

    })
  }

 
  ngOnInit(): void {
    
  }

  get name() { 
    return this.registrationForm.get('name'); 
  }

  get email() { 
    return this.registrationForm.get('email'); 
  }

  get mobile() { 
    return this.registrationForm.get('mobile'); 
  }

  get languages() { 
    return this.registrationForm.get('languages') as FormArray; 
  }

  get city(): any {
    return this.registrationForm.get('address.city');
  }


  addlanguage(){
    this.languages.push(this.fb.control(''));
  }

  removelanguage(i){
    const control = <FormArray>this.languages;
    control.removeAt(i);
  }

  formSubmit(data){
    console.log(data.value);
  }


}
