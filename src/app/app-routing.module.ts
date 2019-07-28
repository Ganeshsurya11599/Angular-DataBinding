import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyComponent } from './property/property.component';
import { EventComponent } from './event/event.component';
import { OnewayComponent } from './oneway/oneway.component';
import { TwowayComponent } from './twoway/twoway.component';


const routes: Routes = [
  {path:'property',component:PropertyComponent},
  {path:'event',component:EventComponent},
  {path:'oneway',component:OnewayComponent},
  {path:'twoway',component:TwowayComponent},
  {path:'',redirectTo:'/app.component.html',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
