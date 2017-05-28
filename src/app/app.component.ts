import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';

import { Business } from './shared/Business.interface';
import { Category } from './shared/Category.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit {
  businesses: Business[];
  categories: Category[];

  constructor (private _firebaseServie: FirebaseService) {
  }

  ngOnInit() {
    this._firebaseServie.getBusinesses().subscribe(
      businesses => {
        this.businesses = businesses;
      }
    );

    this._firebaseServie.getCategories().subscribe(
      categories => {
        this.categories = categories;
      }
    );
  }
}
