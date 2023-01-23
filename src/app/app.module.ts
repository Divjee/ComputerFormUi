import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComputerpartComponent } from './computerpart/computerpart.component';
import { ShowPartComponent } from './computerpart/show-part/show-part.component';
import { AddEditPartComponent } from './computerpart/add-edit-part/add-edit-part.component';
import { ComputerformComponent } from './computerform/computerform.component';
import { ShowFormComponent } from './computerform/show-form/show-form.component';
import { AddEditFormComponent } from './computerform/add-edit-form/add-edit-form.component';
import { SharedService } from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    AppComponent,
    ComputerpartComponent,
    ShowPartComponent,
    AddEditPartComponent,
    ComputerformComponent,
    ShowFormComponent,
    AddEditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
