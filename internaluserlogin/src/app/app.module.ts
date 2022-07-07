import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ViewusersComponent } from './components/viewusers/viewusers.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { RegisterComponent } from './components/register/register.component';
import { DeleteuserComponent } from './components/deleteuser/deleteuser.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ClientaccountComponent } from './components/clientaccount/clientaccount.component';
import { ExternaluserComponent } from './components/externaluser/externaluser.component';
import { UpdateexternaluserComponent } from './components/updateexternaluser/updateexternaluser.component';
import { ResetpasswordexternaluserComponent } from './components/resetpasswordexternaluser/resetpasswordexternaluser.component';
import { ExternaluserdetailComponent } from './components/externaluserdetail/externaluserdetail.component';
import { DeactivateexternaluserComponent } from './components/deactivateexternaluser/deactivateexternaluser.component';
import { AddclientaccountComponent } from './components/addclientaccount/addclientaccount.component';



@NgModule({
  declarations: [
    AppComponent,
    ViewusersComponent,
    UpdateuserComponent,
    RegisterComponent,
    DeleteuserComponent,
    ClientaccountComponent,
    ExternaluserComponent,
    ExternaluserdetailComponent,
    UpdateexternaluserComponent,
    ResetpasswordexternaluserComponent,
    DeactivateexternaluserComponent,
    AddclientaccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
