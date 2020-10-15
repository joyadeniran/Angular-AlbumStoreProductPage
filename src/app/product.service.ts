import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }
  private _albumUrl: string;

  get albumUrl(){
    return this._albumUrl;
  }
  getAlbum(id: number){
    return this._http.get(this.albumUrl)
  .map(response => response.json());;
    
  }
}