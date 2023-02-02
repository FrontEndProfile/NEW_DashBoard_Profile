import { Component ,OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router'; // USE ROUTE FIND ID && EXTRACT DATA End
import { FormGroup, FormControl } from '@angular/forms';
import { Firestore, collection, addDoc, collectionData, doc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-content',
  templateUrl: './about-content.component.html',
  styleUrls: ['./about-content.component.scss']
})
export class AboutContentComponent  implements OnInit{

 // USE ROUTE FIND ID && EXTRACT DATA End ----
  // myId : any;
  // constructor(private route:ActivatedRoute){}
 // USE ROUTE FIND ID && EXTRACT DATA End ----

//   ngOnInit(): void {
//  // USE ROUTE FIND ID && EXTRACT DATA End ----
//     // this.myId = Number(this.route.snapshot.paramMap.get('name'));
//     // console.log(this.myId);
//  // USE ROUTE FIND ID && EXTRACT DATA End ----

//   }

constructor(private firestore: Firestore, private router: Router) { }

aboutData!: Observable<any>;

  // ADD DATA ON FIRE -------------------------
  // Make Reactive Form 
  About = new FormGroup({
    about_title: new FormControl(''),
    about_content: new FormControl('')
  });

  // heroContent() {
  //   // console.log(this.About.value);
  //   // CREATE DATA FROM FORM REACTIVE
  //   console.warn(this.About.value);
  //   const collectionInstance = collection(this.firestore, 'home_about_section');
  //   addDoc(collectionInstance, this.About.value)
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

// ADD DATA ON FIRE -------------------------

    // READ DATA FROM DATABASE FIREBASE 
    GetHeroData() {
      const collectionInstance = collection(this.firestore, 'home_about_section');
      collectionData(collectionInstance, { idField: 'id' })
        .subscribe(val => {
          console.log(val);
        })
      this.aboutData = collectionData(collectionInstance, { idField: 'id' });
    }
    // END 
    // Form Value Reactive ---      
    aboutGet = new FormGroup({
      about_title: new FormControl(''),
      about_content: new FormControl('')
    });
    // Form Value Reactive End ---      
    
    aboutContentEdit(){}
    // FireBase data PatchValue form's
    getData() {
      const collectionInstance = collection(this.firestore, 'home_about_section');
      collectionData(collectionInstance , { idField: 'id' }  )
      .subscribe( val => {
        this.aboutGet.patchValue({
          about_title: val[0]['about_title'],
          about_content: val[0]['about_content'],
        })
        
      })
      this.aboutData = collectionData(collectionInstance , { idField: 'id' });
    }
    // END 
  
    // UPDATE DATA FROM DATABASE FIREBASE 
    updateData(id: string) {
      const docInstance = doc(this.firestore, 'home_about_section' , id );
      
      updateDoc(docInstance , this.aboutGet.value)
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
    AboutContent(){}
  
    ngOnInit(): void {
      this.GetHeroData();
      this.getData()
      // this.heroContent()
    }
}
