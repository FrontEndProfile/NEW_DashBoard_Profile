import { Component,ElementRef,OnInit, ViewChild } from '@angular/core';
import { Firestore,collection,addDoc,collectionData,doc,updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  size:any;
  heroData! : Observable<any>; 

  heriImg = 'https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-themes.png';

  

  constructor(private firestore: Firestore ) { }

    // READ DATA FROM DATABASE FIREBASE 
    GetHeroData() {
      const collectionInstance = collection(this.firestore, 'home_hero_section');
      collectionData(collectionInstance , { idField: 'id' } )
      .subscribe( val => {
        console.log(val[0]);
      })
      this.heroData = collectionData(collectionInstance , { idField: 'id' });
    }
    // END 

  ngOnInit(): void {
    this.GetHeroData();
  }
}
