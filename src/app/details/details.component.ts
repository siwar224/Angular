import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service'; // Assurez-vous que ce chemin est correct

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: number;
  category: Category;

  constructor(private ac: ActivatedRoute, private cs: CategoryService) {
    console.log("je suis le constructor");
  }

  ngOnInit() {
    console.log("je suis le ngOnInit");
    this.ac.paramMap.subscribe(res => {
      this.id = Number(res.get('id'));
      this.cs.getCategoryById(this.id).subscribe(res => this.category = res);

    });

  }
}
