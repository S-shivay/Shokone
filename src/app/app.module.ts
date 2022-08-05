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
import { ClientaccountdetailComponent } from './components/clientaccountdetail/clientaccountdetail.component';
import { UpdateclientaccountComponent } from './components/updateclientaccount/updateclientaccount.component';
import { DeactivateclientaccountComponent } from './components/deactivateclientaccount/deactivateclientaccount.component';
import { ManageemailnotificationComponent } from './components/manageemailnotification/manageemailnotification.component';
import { ManagefieldsComponent } from './components/managefields/managefields.component';
import { ManageusersComponent } from './components/manageusers/manageusers.component';
import { ManageuserpersonasComponent } from './components/manageuserpersonas/manageuserpersonas.component';
import { ManageuseradduserComponent } from './components/manageuseradduser/manageuseradduser.component';
import { DownloadusersComponent } from './components/downloadusers/downloadusers.component';
import { AddupdatebulkusersComponent } from './components/addupdatebulkusers/addupdatebulkusers.component';
import { CreatepersonaComponent } from './components/createpersona/createpersona.component';
import { InternaluserdetailComponent } from './components/internaluserdetail/internaluserdetail.component';
import { DeactivateinternaluserComponent } from './components/deactivateinternaluser/deactivateinternaluser.component';
import { ResetpasswordinternaluserComponent } from './components/resetpasswordinternaluser/resetpasswordinternaluser.component';
import { UpdateinternaluserComponent } from './components/updateinternaluser/updateinternaluser.component';
import { GlobalsettingComponent } from './components/globalsetting/globalsetting.component';
import { DetailsforgotComponent } from './components/detailsforgot/detailsforgot.component';
import { EditforgotComponent } from './components/editforgot/editforgot.component';
import { AccountexternalComponent } from './components/accountexternal/accountexternal.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';


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
    ClientaccountdetailComponent,
    UpdateclientaccountComponent,
    DeactivateclientaccountComponent,
    ManageemailnotificationComponent,
    ManagefieldsComponent,
    ManageusersComponent,
    ManageuserpersonasComponent,
    ManageuseradduserComponent,
    DownloadusersComponent,
    AddupdatebulkusersComponent,
    CreatepersonaComponent,
    InternaluserdetailComponent,
    DeactivateinternaluserComponent,
    ResetpasswordinternaluserComponent,
    UpdateinternaluserComponent,
    GlobalsettingComponent,
    DetailsforgotComponent,
    EditforgotComponent,
    AccountexternalComponent,
    ProductdetailComponent,
    ChangepasswordComponent,
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
