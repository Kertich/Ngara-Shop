import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Outfit } from '../interface';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  
  outfits:Outfit[]=[]
    
    
  constructor( private productService:ProductService, private router:Router, private route:ActivatedRoute){}
    
    
  ngOnInit(): void {
  this.productService.getOutfit().subscribe((outfits)=>{
  this.outfits=outfits
  console.log(this.outfits)
    
    
 })
  }  
    
    
  }


