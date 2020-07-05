import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { LandingComponent } from './components/landing/landing.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { RecordsComponent } from './components/records/records.component';
import { AddRecordComponent } from './components/addrecord/addrecord.component';
import { ShowdetailsComponent } from './components/showdetails/showdetails.component';
import { EditrecordComponent } from './components/editrecord/editrecord.component';
import { DeleterecordComponent } from './components/deleterecord/deleterecord.component';
import { RecorddetailComponent } from './components/recorddetail/recorddetail.component';
import { RequestComponent } from './components/request/request.component';
import { AccessedrecordsComponent } from './components/accessedrecords/accessedrecords.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'landing', component: LandingComponent},
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  { path: 'records', component: RecordsComponent },
  { path: 'addrecords', component: AddRecordComponent },
  { path: 'showdetails/:id', component: ShowdetailsComponent },
  { path: 'editrecord/:id', component: EditrecordComponent },
  { path: 'deleterecord/:id', component: DeleterecordComponent },
  { path: 'recorddetails/:id', component: RecorddetailComponent },
  { path: 'requestdetails/:id', component: RequestComponent },
  { path: 'accessedrecords', component:AccessedrecordsComponent },
  { path: 'profile', component:ProfileComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
