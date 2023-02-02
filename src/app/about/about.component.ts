import { Component,OnInit } from '@angular/core';
import { Firestore,collection,addDoc,collectionData,doc,updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{

  aboutData! : Observable<any>; 


  constructor(private firestore: Firestore ) { }

    // READ DATA FROM DATABASE FIREBASE 
    GetHeroData() {
      const collectionInstance = collection(this.firestore, 'home_about_section');
      collectionData(collectionInstance , { idField: 'id' } )
      .subscribe( val => {
        console.log(val[0]);
      })
      this.aboutData = collectionData(collectionInstance , { idField: 'id' });
    }
    // END 

  ngOnInit(): void {
    this.GetHeroData();
  }

}
