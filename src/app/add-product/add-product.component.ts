import { CategoryService } from '../services/category.service';
import { Product } from './../models/product';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private categoryService: CategoryService) {}


p: Product=new Product();
addP(){
  this.categoryService.addProduct(this.p).subscribe();
  console.log(this.p);
}



}
