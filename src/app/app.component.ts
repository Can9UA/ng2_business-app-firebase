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
  appState: string;
  activeKey: string;

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

  changeState(state: string, key?: string) {
    if (key) {
      this.activeKey = key;
    }

    this.appState = state;
  }

  filterCategory(category) {
    this._firebaseServie.getBusinesses(category).subscribe(
      businesses => {
        this.businesses = businesses;
      }
    );
  }

  addBusiness(
    company: string,
    category: string,
    yers_in_business: number,
    description: string,
    phone: number,
    email: string,
    street_address: string,
    city: string,
    state: string,
    zipcode: number
  ) {
    const createdAt = new Date().toString();

    const newBusiness = {
      company,
      category,
      yers_in_business,
      description,
      phone,
      email,
      street_address,
      city,
      state,
      zipcode
    };

    this._firebaseServie.addBusiness(newBusiness);
    this.changeState('default');
  }
}

