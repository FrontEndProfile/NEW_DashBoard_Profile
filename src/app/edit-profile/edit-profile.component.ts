import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Firestore,collection,addDoc,collectionData,doc,updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
// import { Observer } from '@firebase/util';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  dashBoardData! : Observable<any>;
  constructor(private firestore: Firestore , private router : Router) { }


  profileForm = new FormGroup({
    ProfileName: new FormControl(''),
    ProfileHead: new FormControl(''),
    ProfileMessage: new FormControl(''),
    ProfileExperience: new FormControl(''),
    ProfileLocation: new FormControl(''),
    ProfileEduction: new FormControl(''),
    ProfileContact: new FormControl(''),
  });
  
  onSubmit() {
    // // CREATE DATA FROM FORM REACTIVE
    // console.warn(this.profileForm.value);
    // const collectionInstance = collection(this.firestore, 'dashboard_profile');
    // addDoc(collectionInstance, this.profileForm.value)
    //   .then(() => {
    //     console.log('Data Saved Success');
    //   })
    //   .catch((err) => {
    //     console.warn(err);
    //     console.log('wronged');
    //   })
    // // END 

  }

  
  // READ DATA FROM DATABASE FIREBASE 
  getData() {
    const collectionInstance = collection(this.firestore, 'dashboard_profile');
    collectionData(collectionInstance , { idField: 'id' }  )
    .subscribe( val => {
      console.log(val[0]['ProfileName'])
    
      // console.log(update_in);
      
      this.profileForm.patchValue({
        ProfileName: val[0]['ProfileName'],
        ProfileHead: val[0]['ProfileHead'],
        ProfileMessage: val[0]['ProfileMessage'],
        ProfileContact: val[0]['ProfileContact'],
        ProfileEduction: val[0]['ProfileEduction'],
        ProfileLocation: val[0]['ProfileLocation'],
        ProfileExperience: val[0]['ProfileExperience'],
      })
      
    })
    this.dashBoardData = collectionData(collectionInstance , { idField: 'id' });
  }
  // END 

  // UPDATE DATA FROM DATABASE FIREBASE 
  updateData(id: string) {
    const docInstance = doc(this.firestore, 'dashboard_profile' , id );
    
    updateDoc(docInstance , this.profileForm.value)
    .then(() => {
      console.log('Data Update Success');
      this.router.navigate(['dashboard'])
    })
    .catch((err) => {
      console.warn(err);
      console.log('ERROR ');
    })
  }
  // END 


  ngOnInit(): void {
      this.getData()
  }
}
