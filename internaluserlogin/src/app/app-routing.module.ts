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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
