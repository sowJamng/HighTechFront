import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './components/Article/article-list/article-list.component';
import { ArticleAddComponent } from './components/Article/article-add/article-add.component';
import { ArticleUpdateComponent } from './components/Article/article-update/article-update.component';
import { SignoutComponent } from './components/aut/signout/signout.component';
import {LOCALE_ID} from '@angular/core';
import { ArticleDetailsComponent } from './components/Article/article-details/article-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleAddComponent,
    ArticleUpdateComponent,
    SignoutComponent,
    ArticleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: LOCALE_ID,
   useValue: 'fr' // 'de' for Germany, 'fr' for France ...
  }
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
