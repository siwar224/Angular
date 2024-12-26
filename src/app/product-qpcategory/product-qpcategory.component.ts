import { Product } from './../models/product';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { CategoryService } from './../services/category.service';

@Component({
  selector: 'app-product-qpcategory',
  templateUrl: './product-qpcategory.component.html',
  styleUrls: ['./product-qpcategory.component.css']
})
export class ProductQPCategoryComponent {

  id : number ;
  constructor(private categoryService:CategoryService, private ac:ActivatedRoute){
  }

  list : Product[]=[];

  ngOnInit(){
    console.log("je suis le ngOnInit");
  //  this.id= this.ac.snapshot.params['id'];
  //  console.log(this.ac.snapshot.params);
  this.ac.queryParamMap.subscribe(res=>{
    this.id=Number(res.get('id'));
    this.categoryService.getListProductsByCategory(this.id).subscribe(res=>this.list=res);
   });
  

}
  }

