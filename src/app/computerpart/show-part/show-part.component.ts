import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-part',
  templateUrl: './show-part.component.html',
  styleUrls: ['./show-part.component.css']
})
export class ShowPartComponent implements OnInit {

  constructor(private service:SharedService){}
  
  ComputerPartList:any=[];
  ModalTitle: string | undefined;
  ActivateAddEditPartComp:boolean=false;
  part:any;

  ngOnInit(): void {
    this.refreshPartList();
}

addClick(){
  this.part={
    id:0,
    type:"",
    brand:"",
    model:"",
    price:0
  }
  this.ModalTitle="Pievienot detaļu";
  this.ActivateAddEditPartComp=true;
}

closeClick(){
  this.ActivateAddEditPartComp=false;
  this.refreshPartList();
}

editClick(item: any){
  this.part=item;
  this.ModalTitle="Rediģēt informāciju";
  this.ActivateAddEditPartComp=true;
}
  
refreshPartList(){
  this.service.getPartsList().subscribe(data=>{
    this.ComputerPartList=data;
  });
}

deleteClick(item:any){
  if(confirm('Vai tiešām vēlaties izdzēst detaļu?'))
  this.service.deletePartById(item.id).subscribe(res=>{
    });
    this.ModalTitle="Detaļa izdzēsta";
}
}
