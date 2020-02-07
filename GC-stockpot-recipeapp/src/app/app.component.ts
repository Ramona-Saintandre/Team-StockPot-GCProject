import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GC-stockpot-recipeapp';

  loadedFeature = 'crock-pot-recipes';

  onNavigate(feature: string) {

    this.loadedFeature = feature;

  }
}
