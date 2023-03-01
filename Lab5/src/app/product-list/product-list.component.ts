import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products, categories } from '../products';
import { Category, Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products = products;
  category: Category | undefined;

  constructor(private route: ActivatedRoute) {}

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const categoryIdFromRoute = Number(routeParams.get('categoryId'));

    this.category = categories.find(
      (category) => category.id === categoryIdFromRoute
    );
  }

  remove(product: Product) {
    this.products = this.products.filter((p) => p !== product);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
