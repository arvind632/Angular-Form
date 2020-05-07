import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Seat } from '../seat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
 // reservationData = { seat:'', name:''};
  reservationForm : FormGroup;
  
  persions = [];
  totalNoOfSeat = 80;
  totalSeats = [];
  seats = ["1", "2", "3", "4", "5", "6", "7"];

  persionHtml = [];


  

  constructor( private formbuilder: FormBuilder, private apiService: ApiService) { 
    
    this.reservationForm = formbuilder.group({
      seat : new FormControl(),
      name: new FormControl(),
      address:formbuilder.group({
         city:new FormControl(),
         zipcode:new FormControl(),
      }),
      peoples: formbuilder.array([
        this.formbuilder.control(''),
      ]),
      names: formbuilder.array([
        this.formbuilder.control(''),
      ])
    });
    
    
  }


  // Define array object
  get peoples() {
    return this.reservationForm.get('peoples') as FormArray;
  }

  
  ngOnInit(): void {
    
    this.apiService.getSeat().subscribe((result)=>{
      console.log(result);
      this.totalSeats = result;
    });

  }

  get names() {
    return this.reservationForm.get('names') as FormArray;
  }

  addPersion(event: any){
        let seat = event.target.value;
        if(seat>0){
        for(let i=1;i<seat;i+=1){
             this.names.push(this.formbuilder.control(''));
          }
        }
  }

  onSubmit() {
         console.log(this.reservationForm.value);
          return false;


       /*
       for(let i=1;i<=data.seat;i++){
        this.persions.push(data["persion["+i+"]"]);
        }

        console.log(this.persions);
        */

      
      /* 
        this.apiService.register(this.persions).subscribe(
                data => {
                     console.log('success');
                      console.log(data);
                },
                error => {
                    console.log('error');
                }
        );
      */
        
}


addpeople(){
    this.peoples.push(this.formbuilder.control(''));
}

removepeople(i:number){
  const control = <FormArray>this.peoples;
  control.removeAt(i);
}

  

  
}
