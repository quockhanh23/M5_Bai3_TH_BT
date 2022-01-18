import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Color2Component} from "./color2/color2.component";
import {ColorComponent} from "./color/color.component";
import {CaluComponent} from "./calu/calu.component";
import {CategoryComponent} from "./category/category.component";
import {AppComponent} from "./app.component";
import {ArticleComponent} from "./article/article.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {TimelinesComponent} from "./timelines/timelines.component";
import {NameCardComponent} from "./name-card/name-card.component";
import {ProgressBarComponent} from "./progress-bar/progress-bar.component";
import {EmployeeComponent} from "./employee/employee.component";
import {RegisterComponent} from "./register/register.component";
import {TodoComponent} from "./todo/todo.component";
import {YoutubePlaylistComponent} from "./youtube-playlist/youtube-playlist.component";
import {YoutubePlayerComponent} from "./youtube-player/youtube-player.component";

const routes: Routes = [
//full, prefix
//   {path: '',pathMatch: 'full', redirectTo: 'calu' },
//   {path: '', component: CaluComponent},
  {path: 'color2', component: Color2Component},
  {path: 'color', component: ColorComponent},
  {path: 'calu', component: CaluComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'ar', component: ArticleComponent},
  {path: 'time', component: TimelinesComponent},
  {path: 'nc', component: NameCardComponent},
  {path: 'pr', component: ProgressBarComponent},
  {path: 'em', component: EmployeeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'todo', component: TodoComponent},
  // {path: '**', component: NotfoundComponent},
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
  }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
