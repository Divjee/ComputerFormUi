import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-part',
  templateUrl: './add-edit-part.component.html',
  styleUrls: ['./add-edit-part.component.css']
})
export class AddEditPartComponent implements OnInit {
partNamee: any;
  
  constructor(private service:SharedService){}

  ComputerPartList:any=[];

  @Input() part:any
  id: number | undefined;
  type:string | undefined;
  brand:string | undefined;
  model:string | undefined;
  price:number | undefined;

  
  
  ngOnInit(): void {
    this.id=this.part.id;
    this.type=this.part.type;
    this.brand=this.part.brand;
    this.model=this.part.model;
    this.price=this.part.price;
  }

  addHardware(){
      var val = {
                id:this.id,
                type:this.type,
                brand:this.brand,
                model:this.model,
                price:this.price}
      this.service.addPart(val).subscribe(res=>{
        alert("detaļa pievienota")
      });
  }

  updatePart(){
    var val = {id:this.id,
              type:this.type,
              brand:this.brand,
              model:this.model,
              price:this.price};
        this.service.editPart(val).subscribe(res=>{
           alert('Rediģēts!') 
        });      
  }

  refreshPartList(){
    this.service.getPartNameList().subscribe(data=>{
      this.ComputerPartList=data;
    });
  }

}
