import { CategoryService } from './../services/category.service';
import { Product } from './../models/product';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent implements OnInit {
  
  id : number ;
  constructor(private categoryService:CategoryService, private ac:ActivatedRoute){
    console.log("je suis le constructor");
  }

  @Input() product: Product;

  listProducts : Product[]=[];
  list : Product[]=[];



ngOnInit(){
  console.log("je suis le ngOnInit");
//  this.id= this.ac.snapshot.params['id'];
//  console.log(this.ac.snapshot.params);
  this.ac.paramMap.subscribe(res=>{
  this.id=Number(res.get('id'));
  this.categoryService.getListProductsByCategory(this.id).subscribe(res=>this.list=res);
 });

}
p: Product=new Product();
addP(){
  this.categoryService.addProduct(this.p).subscribe();
  console.log(this.p);
}

deletep(p: Product){
  this.categoryService.deleteProduct(p.id).subscribe()
  console.log("produit supprime",p.id);

}



}
