import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/aut/signin/signin.component';
import { ArticleListComponent } from './components/Article/article-list/article-list.component';
import { ArticleDetailsComponent } from './components/Article/article-details/article-details.component';
const routes: Routes = [
  {
    path:'', redirectTo: 'highTech', pathMatch: 'full'
  },
  {
     path:'signin',
     component:SigninComponent
  },{
    path:'articles',
    component:ArticleListComponent
  },
  {
    path:'details',
    component:ArticleDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
