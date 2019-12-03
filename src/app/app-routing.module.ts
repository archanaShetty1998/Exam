import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ParentComponent} from './parent/parent.component';

import {MemberComponent} from './member/member.component';
import {Child1Component} from './child1/child1.component';
import {Child2Component} from './child2/child2.component';




const routes: Routes = [
{path:'',redirectTo:'member',pathMatch:'full'},
{path:'parent',component:ParentComponent},

{path:'member',component:MemberComponent,


children : [
{path:'',redirectTo:'child-one',pathMatch:'full'},
{path:'child-one',component:Child1Component},
{path:'child-two',component:Child2Component}
]}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
