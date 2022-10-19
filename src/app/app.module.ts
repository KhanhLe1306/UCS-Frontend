import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFileUploaderModule } from 'angular-file-uploader';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { IndividualListComponent } from './components/individual-list/individual-list.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, FormComponent, IndividualListComponent, FileUploadComponent, LoginComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AngularFileUploaderModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
