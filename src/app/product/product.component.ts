import { Component, OnInit } from '@angular/core';
import productData from 'src/assets/pcs.json';
interface Product{
  marque: string;
  nom: string;
  type: string;
  ecran: string;
  clavier: object;
  system: {
            ram: string;
            cpu: {
                marque: string;
                nom: string;
                score: Number;
                core: Number;
                frequence_max: Number;
                tdp:Number;
            },
            hdd: {
                capacite: Number;
                type: string;
                rpm: Number;
                vitesse_transfert: Number;
            },
            cg: {
                marque: string;
                modele: string;
                score: Number,
            }
        },
        batterie:string;
        prix: Number;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  
  products: Product[] = productData;
  ngOnInit(): void {
  }
}
