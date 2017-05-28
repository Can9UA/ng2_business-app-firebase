import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import 'rxjs/add/operator/map';

import { Business } from '../shared/Business.interface';
import { Category } from '../shared/Category.interface';

@Injectable()
export class FirebaseService {
  businesses: FirebaseListObservable<Business[]>;
  categories: FirebaseListObservable<Category[]>;

  constructor(private _db: AngularFireDatabase) {
  }

  getBusinesses() {
    return this.businesses = this._db.list('/businesses') as FirebaseListObservable<Business[]>;
  }

  getCategories() {
    return this.categories = this._db.list('/categories') as FirebaseListObservable<Category[]>;
  }

}
