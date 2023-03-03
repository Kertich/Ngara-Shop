import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInterface } from '../interface';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {



  user:UserInterface[]=[]
    
    
  constructor( private productService:UsersService, private router:Router, private route:ActivatedRoute){}
    
    
  ngOnInit(): void {
  this.productService.getUsers().subscribe((outfits)=>{

  // console.log(this.outfits)
    
    
 })
}  
}
