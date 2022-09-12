import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipes/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'recipes', component: RecipeListComponent },
      { path: 'recipes/:id', component: RecipeDetailComponent },
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch:'full' },
      { path: '**', redirectTo: 'home', pathMatch:'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
