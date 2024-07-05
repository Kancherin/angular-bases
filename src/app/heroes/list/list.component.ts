import { Component } from '@angular/core';

@Component({
  selector: 'app-heores-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  public heroesName: string[] = ['Spiderman','Iron Man','Hulk', 'She Hulk', 'Thor'];
  public deletedHero?: string = '';

  removeLastHero(): void {
    this.deletedHero = this.heroesName.pop();
  }
}
