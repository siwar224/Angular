import { Component, Input } from '@angular/core';
import { Product } from '../models/product';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  id : number ;
 // list : Product[]=[];

  constructor(private categoryService:CategoryService ,private ac:ActivatedRoute){
  }
 //@Input() product : Product;


 ngOnInit(){
  this.getproductByid(this.id);
}
  product: Product = new Product(); 
  updatep(id:number , product:Product ){
    this.categoryService.updateProduct(this.id,this.product).subscribe()
    console.log("voila le produit a modifi",this.id);
  }

  getproductByid(id: Number) {
    this.ac.paramMap.subscribe((res) => {
      this.id = Number(res.get('id'));
      this.categoryService.getProductById(this.id).subscribe((product) => {
        this.product = product; 
        console.log(product.id,product.name,product.description);
      });
    });
  }
}


