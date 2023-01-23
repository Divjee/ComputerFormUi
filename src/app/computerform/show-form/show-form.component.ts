import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.css']
})
export class ShowFormComponent implements OnInit {

  constructor(private service:SharedService){}

  ComputerFormList:any=[];
  ModalTitle:string | undefined;
  ActivateAddEditFormComp:boolean = false;
  form:any;
  ngOnInit(): void {
    this.refreshFormList();
    }

    addClick(){
      this.form={
        formId:0,
        partId:0,
        justification:""
      }
      this.ModalTitle="Pievienot pieteikumu";
      this.ActivateAddEditFormComp=true;
    }

    editClick(item: number,item2: number,item3: string){
      this.form={
        formId:0,
        partId:0,
        justification:""
      }
     this.form.formId=item;
     this.form.partId=item2;
     this.form.justification=item3;
      this.ModalTitle="Rediģēt pieteikumu"
      this.ActivateAddEditFormComp=true;
    }

    closeClick(){
      this.ActivateAddEditFormComp=false;
      this.refreshFormList();
    }

    deleteClick(item:any){
      if(confirm('Tiešām vēlaties dzēst?')){
        this.service.deleteFormById(item.id).subscribe(x=>{
        });
      }
     
      this.ModalTitle="Pieteikums Izdzēsts!"
    }

    refreshFormList(){
      this.service.getFormsList().subscribe(data=>{
        this.ComputerFormList=data;
      });
    }

}
