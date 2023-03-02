import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Outfit } from './interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

outfits:Outfit[]=[]

constructor(private http:HttpClient) { }

getOutfit():Observable<Outfit[]>{

  return this.http.get<Outfit[]>('http://localhost:4000/api/products')
}

}
