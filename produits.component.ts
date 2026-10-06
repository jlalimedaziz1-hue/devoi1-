import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produits.component.html',
})
export class ProduitsComponent {

  produits : string[];


  constructor(){
    this.produits=["PC Asus","imprimente epson","tablette samsung"];
  }


}
