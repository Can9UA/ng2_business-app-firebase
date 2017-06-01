import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';

import { Business } from './shared/Business.interface';
import { Category } from './shared/Category.interface';
import { FormGroup, FormBuilder } from '@angular/forms';

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
  newBusinessForm: FormGroup;
  editableBusiness: Business;

  constructor (private _firebaseServie: FirebaseService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this._firebaseServie.getBusinesses()
      .subscribe(
        businesses => { this.businesses = businesses; }
      );

    this._firebaseServie.getCategories()
      .subscribe(
        categories => { this.categories = categories; }
      );

    this.buildForms();
  }

  buildForms() {
    this.newBusinessForm = this.fb.group({
      company: [],
      category: [],
      yers_in_business: [],
      description: [],
      phone: [],
      email: [],
      street_address: [],
      city: [],
      state: [],
      zipcode: []
    });
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

  addBusiness(form: FormGroup) {
    const createdAt = new Date().toString();

    this._firebaseServie.addBusiness(form.value);
    form.reset();
    this.changeState('default');
  }

  showEdit(business: Business) {
    this.activeKey = business.$key;
    this.editableBusiness = { ...business };
    this.changeState('edit', business.$key);
  }

  editBusiness(editableBusiness) {
    this._firebaseServie.updateBusiness(this.activeKey, editableBusiness);
    this.changeState('default');
  }

  deleteBusiness(key: string) {
    this._firebaseServie.deleteBusiness(key);
  }
}

