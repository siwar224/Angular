import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../services/category.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-add-product-reactive',
  templateUrl: './add-product-reactive.component.html',
  styleUrls: ['./add-product-reactive.component.css']
})
export class AddProductReactiveComponent {
  constructor(private categoryService: CategoryService) {}

  nametest = new FormControl('test');
  myForm : FormGroup;
  
  ngOnInit(){
    this.myForm=new FormGroup({
      namep : new FormControl("test",[Validators.required, Validators.minLength(5)]),
      pricep : new FormControl(),
      descriptionp: new FormControl("", Validators.required)
    })
  }

  p: Product=new Product();
addP(){
  let p : Product = new Product();
  p.name=this.name.value;
  p.description=this.description.value;
  p.price=this.price.value;
  console.log(this.myForm.value);
    this.categoryService.addProduct(p).subscribe();

}

  get name(){
    return this.myForm.get('namep');
  }
  get price(){
    return this.myForm.get('pricep');
  }
  get description(){
    return this.myForm.get('descriptionp');
  }
}
