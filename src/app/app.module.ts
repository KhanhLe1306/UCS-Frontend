import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { IndividualListComponent } from './components/individual-list/individual-list.component';

@NgModule({
  declarations: [AppComponent, FormComponent, IndividualListComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
