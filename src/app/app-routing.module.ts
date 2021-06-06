import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ImageDetailsComponent } from './page/image-details/image-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'image-details/:id', component: ImageDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
