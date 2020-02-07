import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { FavoritepagesComponent } from './favoritepages/favoritepages.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,    
    FavoritepagesComponent,
    HeaderComponent,    
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipesComponent,    
    RecipesItemComponent,
    RecipesDetailsComponent,
    RecipesListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
