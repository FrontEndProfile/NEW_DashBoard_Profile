import { Component, OnInit } from '@angular/core';
import { Firestore,collection,addDoc,collectionData,doc,updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashBoardData!: Observable<any>;
  constructor(private firestore: Firestore) { }
  profileForm = new FormGroup({
    ProfileName: new FormControl(''),
    ProfileHead: new FormControl(''),
    ProfileMessage: new FormControl(''),
    ProfileExperience: new FormControl(''),
    ProfileLocation: new FormControl(''),
    ProfileEduction: new FormControl(''),
    ProfileContact: new FormControl(''),
  });
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
      console.log('Data Update Success');;
    })
    .catch((err) => {
      console.warn(err);
      console.log('wronged');
    })
  }

  // END 
  onSubmit() {

    // console.warn(this.profileForm.value);
    // const collectionInstance = collection(this.firestore, 'dashboard_profile');
    // CREATE DATA FROM FORM REACTIVE
    // addDoc(collectionInstance, this.profileForm.value)
    //   .then(() => {
    //     console.log('Data Saved Success');
    //   })
    //   .catch((err) => {
    //     console.warn(err);
    //     console.log('wronged');
    //   })
    // END 

  }

  ngOnInit(): void {
    this.getData()
  }
}
