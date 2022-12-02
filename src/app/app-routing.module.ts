import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SuccessComponent } from './components/success/success.component';
import { AddClassComponent } from './components/add-class/add-class.component';
import { AvailableSlotsComponent } from './components/available-slots/available-slots.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';
import { RemoveClassComponent } from './components/remove-class/remove-class.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { AddInstructorComponent } from './components/add-instructor/add-instructor.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'success', component: SuccessComponent, pathMatch: 'prefix' },
  { path: 'addClass', component: AddClassComponent},
  { path: 'availableSlots', component: AvailableSlotsComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'fileUpload', component: FileUploadComponent},
  { path: 'form', component: FormComponent},
  { path: 'login', component: LoginComponent},
  { path: 'removeClass', component: RemoveClassComponent},
  { path: 'results', component: SearchResultsComponent},
  { path: 'addInstructor', component: AddInstructorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  routes = routes;
}
