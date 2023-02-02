import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Firestore, collection, addDoc, collectionData, doc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {

  heroData!: Observable<any>;


  constructor(private firestore: Firestore, private router: Router) { }
  // ADD DATA ON FIRE -------------------------
  // Make Reactive Form 
  // Hero = new FormGroup({
  //   hero_title: new FormControl(''),
  //   hero_content: new FormControl('')
  // });

  // heroContent() {
  //   console.log(this.Hero.value);
  //   // CREATE DATA FROM FORM REACTIVE
  //   console.warn(this.Hero.value);
  //   const collectionInstance = collection(this.firestore, 'home_hero_section');
  //   addDoc(collectionInstance, this.Hero.value)
  //     .then(() => {
  //       console.log('Data Saved Success');
  //     })
  //     .catch((err) => {
  //       console.warn(err);
  //       console.log('wronged');
  //     })
  //   // END 
  // }
  // ADD DATA ON FIRE END -------------------------

  // READ DATA FROM DATABASE FIREBASE 
  GetHeroData() {
    const collectionInstance = collection(this.firestore, 'home_hero_section');
    collectionData(collectionInstance, { idField: 'id' })
      .subscribe(val => {
        console.log(val);
      })
    this.heroData = collectionData(collectionInstance, { idField: 'id' });
  }
  // END 
  // Form Value Reactive ---      
  HeroGet = new FormGroup({
    hero_title: new FormControl(''),
    hero_content: new FormControl('')
  });
  // Form Value Reactive End ---      
  
  heroContentEdit(){}
  // FireBase data PatchValue form's
  getData() {
    const collectionInstance = collection(this.firestore, 'home_hero_section');
    collectionData(collectionInstance , { idField: 'id' }  )
    .subscribe( val => {
      this.HeroGet.patchValue({
        hero_title: val[0]['hero_title'],
        hero_content: val[0]['hero_content'],
      })
      
    })
    this.heroData = collectionData(collectionInstance , { idField: 'id' });
  }
  // END 

  // UPDATE DATA FROM DATABASE FIREBASE 
  updateData(id: string) {
    const docInstance = doc(this.firestore, 'home_hero_section' , id );
    
    updateDoc(docInstance , this.HeroGet.value)
    .then(() => {
      console.log('Data Update Success');
      // this.router.navigate(['dashboard'])
    })
    .catch((err) => {
      console.warn(err);
      console.log('ERROR ');
    })
  }
  // END 

  ngOnInit(): void {
    this.GetHeroData();
    this.getData()
  }
}
