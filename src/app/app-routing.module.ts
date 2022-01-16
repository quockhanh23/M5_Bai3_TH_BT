import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Color2Component} from "./color2/color2.component";
import {ColorComponent} from "./color/color.component";
import {CaluComponent} from "./calu/calu.component";
import {CategoryComponent} from "./category/category.component";
import {AppComponent} from "./app.component";
import {ArticleComponent} from "./article/article.component";
import {NotfoundComponent} from "./notfound/notfound.component";

const routes: Routes = [
  {path: '', component: CaluComponent},
  {path: 'color2', component: Color2Component},
  {path: 'color', component: ColorComponent},
  {path: 'calu', component: CaluComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'ar', component: ArticleComponent},
  {path: '**', component: NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
