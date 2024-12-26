import { Product } from './../models/product';
import { Category } from './../models/category';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
  //une seule insatance pour tous les composants
  //et les services de l'application
})
export class CategoryService {

  apiUrl="http://localhost:3000/categories";
  apiUrl1="http://localhost:3000/products";

  
  constructor(private http:HttpClient) { }

  /*getListCategories() :  Category[]{
    return [
      {"id":1,"title":"Grand électroménager", "image":"assets/images/categorie_electromenager.jpg", "description":"description 1", "available":true},
      {"id":2,"title":"Petit électroménager", "image":"assets/images/categorie_petit_electromenager.jpg", "description":"description 2", "available":true},
      {"id":3,"title":"Produits informatiques", "image":"assets/images/categorie_produits_informatiques.jpg", "description":"description 3", "available":true},
      {"id":4,"title":"Smart Phones", "image":"assets/images/categorie_smartPhone.jpg", "description":"description 4", "available":true},
      {"id":5,"title":"TV, images et son", "image":"assets/images/categorie_tv_image_son.jpg", "description":"description 5", "available":false},
      {"id":6,"title":"Produits voiture", "image":"assets/images/produits_nettoyages.jpg", "description":"description 6","available":false},
      ]
  }*/

  getListCategoriesFromBackend() : Observable<Category[]> {
   return this.http.get<Category[]>("http://localhost:3000/categories");
}



getCategoryById(id:number): Observable<Category>{
  return this.http.get<Category>(this.apiUrl+"/"+id);
}
//Cette méthode effectue une requête HTTP pour récupérer les produits associés à une catégorie.
getListProductsByCategory(id:number) : Observable<Product[]> {
  return this.http.get<Product[]>("http://localhost:3000/products?categoryId="+id);
}

getProductById(id:number): Observable<Product>{
  return this.http.get<Product>(this.apiUrl1+"/"+id);
}

addProduct(product: Product): Observable<Product> {
  return this.http.post<Product>(this.apiUrl1, product);
}

/*deleteProduct(id : number): Observable<Product> {
  return this.http.delete<Product>(this.apiUrl1+"/"+id);
}
*/

deleteProduct(id: number): Observable<Product> {
  const url = `http://localhost:3000/products/${id}`;
 // console.log("URL pour suppression : ", url);  // Pour déboguer
  return this.http.delete<Product>(url);
}

updateProduct(id: number, product: Product): Observable<Product> {
  const url = `http://localhost:3000/products/${id}`;
  return this.http.put<Product>(url, product); 
}




}