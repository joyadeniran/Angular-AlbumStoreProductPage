import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})

export class ProductDescription{
  albumInfo;
}
export class ProductDescriptionComponent implements OnInit {
  albumInfo;
    
  constructor(private _productService:ProductService) {  }
    get productService(){
      return this._productService;
    }

  
 
  ngOnInit() {
    this.productService.getAlbum(1)
    .subscribe(response => this.albumInfo = response);
  }
}
