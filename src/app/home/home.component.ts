import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, FormBuilder, FormArray,Validators } from '@angular/forms';
import { Seat } from '../seat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
 
  reservationForm : FormGroup;
  
  persions = [];
  
  totalSeats = [];
  

  


  

  constructor( private formbuilder: FormBuilder, private apiService: ApiService) { 
    
    this.reservationForm = formbuilder.group({
      
      peoples: formbuilder.array([
        this.formbuilder.control('',Validators.required),
      ]),
      
    });
    
    
  }


  // Define array object
  get peoples() {
    return this.reservationForm.get('peoples') as FormArray;
  }

  
  ngOnInit(): void {
     this.getseat();
  }

  getseat(){
    
    this.apiService.getSeat().subscribe((result)=>{
      console.log(result);
      this.totalSeats = result;
    });
  }

  
  
  onSubmit() {
         console.log(this.reservationForm.value);
         this.persions = this.reservationForm.value;
         
          
      
      
        this.apiService.register(this.persions).subscribe(
                data => {
                     console.log('success');
                      console.log(data);
                      this.getseat();
                },
                error => {
                    console.log('error');
                }
        );
      
        
}


addpeople(){
    this.peoples.push(this.formbuilder.control('', Validators.required));
}

removepeople(i:number){
  const control = <FormArray>this.peoples;
  control.removeAt(i);
}

  

  
}
