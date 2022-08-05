import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteuserComponent } from './components/deleteuser/deleteuser.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { ViewusersComponent } from './components/viewusers/viewusers.component';
import { ClientaccountComponent } from './components/clientaccount/clientaccount.component';
import { ExternaluserComponent } from './components/externaluser/externaluser.component';
import { ExternaluserdetailComponent } from './components/externaluserdetail/externaluserdetail.component';
import { DeactivateexternaluserComponent } from './components/deactivateexternaluser/deactivateexternaluser.component';
import { UpdateexternaluserComponent } from './components/updateexternaluser/updateexternaluser.component';
import { ResetpasswordexternaluserComponent } from './components/resetpasswordexternaluser/resetpasswordexternaluser.component';
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


const routes: Routes = [
  { path: 'register-component', component: RegisterComponent },
  { path: 'viewuser-component', component: ViewusersComponent },
  {path: "deletemodel/:id", component: DeleteuserComponent},
  {path: "updatemodel/:id", component: UpdateuserComponent},
  {path: 'clientaccount-component', component: ClientaccountComponent},
  {path: 'externaluser-component', component: ExternaluserComponent},
  {path: 'externaluserdetail-component', component: ExternaluserdetailComponent},
  {path: 'updateexternaluser-component', component: UpdateexternaluserComponent},
  {path: 'deactivateexternaluser-component', component: DeactivateexternaluserComponent},
  {path: 'resetpasswordexternaluser-component', component: ResetpasswordexternaluserComponent},
  {path: 'addclientaccount-component', component: AddclientaccountComponent},
  {path: 'clientaccountdetail-component', component: ClientaccountdetailComponent},
  {path: 'updateclientaccount-component', component: UpdateclientaccountComponent},
  {path: 'deactivateclientaccount-component', component: DeactivateclientaccountComponent},
  {path: 'manageemailnotification-component', component: ManageemailnotificationComponent},
  {path: 'managefields-component', component: ManagefieldsComponent},
  {path: 'manageusers-component', component: ManageusersComponent},
  {path: 'manageuserpersonas-component', component: ManageuserpersonasComponent},
  {path: 'manageuseradduser-component', component: ManageuseradduserComponent},
  {path: 'downloadusers-component', component: DownloadusersComponent},
  {path: 'addupdatebulkusers-component', component: AddupdatebulkusersComponent},
  {path: 'createpersona-component', component: CreatepersonaComponent},
  {path: 'internaluserdetail-component', component: InternaluserdetailComponent},
  {path: 'deactivateinternaluser-component', component: DeactivateinternaluserComponent},
  {path: 'resetpasswordinternaluser-component', component: ResetpasswordinternaluserComponent},
  {path: 'updateinternaluser-component', component: UpdateinternaluserComponent},
  {path: 'globalsetting-component', component: GlobalsettingComponent},
  {path: 'detailsforgot.component', component: DetailsforgotComponent},
  {path: 'editforgot.component', component: EditforgotComponent},
  {path: 'accountexternal.component', component: AccountexternalComponent},
  {path: 'productdetail.component', component: ProductdetailComponent},
  {path: 'changepassword.component', component: ChangepasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
