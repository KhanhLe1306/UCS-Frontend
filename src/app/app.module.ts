import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFileUploaderModule } from 'angular-file-uploader';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { IndividualListComponent } from './components/individual-list/individual-list.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SuccessComponent } from './components/success/success.component';
import { AddClassComponent } from './components/add-class/add-class.component';
import { RemoveClassComponent } from './components/remove-class/remove-class.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { AvailableSlotsComponent } from './components/available-slots/available-slots.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    IndividualListComponent,
    FileUploadComponent,
    LoginComponent,
    DashboardComponent,
    SuccessComponent,
    AddClassComponent,
    RemoveClassComponent,
    SearchResultsComponent,
    AvailableSlotsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFileUploaderModule,
    ReactiveFormsModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
