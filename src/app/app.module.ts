import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { AddRecordComponent } from './components/addrecord/addrecord.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { LandingComponent } from './components/landing/landing.component';
import { DownloadComponent } from './components/download/download.component';
import { RequestComponent } from './components/request/request.component';
import { ShowdetailsComponent } from './components/showdetails/showdetails.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ViewotpComponent } from './components/viewotp/viewotp.component';
import { RecordsComponent } from './components/records/records.component';
import { EditrecordComponent } from './components/editrecord/editrecord.component';
import { DeleterecordComponent } from './components/deleterecord/deleterecord.component';
import { RecorddetailComponent } from './components/recorddetail/recorddetail.component';
import { AccessedrecordsComponent } from './components/accessedrecords/accessedrecords.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    SearchComponent,
    LandingComponent,
    DownloadComponent,
    RequestComponent,
    ShowdetailsComponent,
    NotificationsComponent,
    ViewotpComponent,
    RecordsComponent,
    AddRecordComponent,
    EditrecordComponent,
    DeleterecordComponent,
    RecorddetailComponent,
    AccessedrecordsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
