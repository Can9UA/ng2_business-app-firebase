import {Injectable} from '@angular/core';
import {
  AngularFireDatabase,
  FirebaseListObservable
} from 'angularfire2/database';

import 'rxjs/add/operator/map';

import {Business} from '../shared/Business.interface';
import {Category} from '../shared/Category.interface';

@Injectable()
export class FirebaseService {
  businesses: FirebaseListObservable<Business[]>;
  categories: FirebaseListObservable<Category[]>;

  constructor(private _db: AngularFireDatabase) {
  }

  getBusinesses(category: string = '') {
    if (category) {
      this.businesses = this._db.list(`/businesses`, {
        query: {
          orderByChild: 'category',
          equalTo: category
        }
      }) as FirebaseListObservable<Business[]>;
    } else {
      this.businesses = this._db.list('/businesses') as FirebaseListObservable<Business[]>;
    }

    return this.businesses;
  }

  getCategories() {
    return this.categories = this._db.list('/categories') as FirebaseListObservable<Category[]>;
  }

  addBusiness(business: Business) {
    return this.businesses.push(business);
  }

  updateBusiness(key: string, business: Business) {
    return this.businesses.update(key, business);
  }

  deleteBusiness(key: string) {
    return this.businesses.remove(key);
  }
}
