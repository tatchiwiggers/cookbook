import { Component } from "@angular/core";
import { IRecipe } from "./recipe";
import recipesJson from './recipes.json';

@Component({
    selector: 'ck-recipes',
    templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {
    pageTitle: string = 'Recipes List'

    imageWidth = 70;
    imageMargin = 2;
    showImage: boolean = false;
    // listFilter: string = 'cart';
    
    private _listFilter: string = '';
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredRecipes = this.performFilter(value);
    }
    
    filteredRecipes: IRecipe[] = [];
    recipes: IRecipe[] = recipesJson;


    performFilter(filterBy: string): IRecipe[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.recipes.filter((recipe: IRecipe) =>
        recipe.name.toLocaleLowerCase().includes(filterBy));
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
        
    ngOnInit(): void {
        // console.log("I'm on Init")
        this.listFilter = ''
    }
}

