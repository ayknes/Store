import { Component, OnInit } from '@angular/core';
import { ProService } from '../pro.service';
import { product } from '../product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private p:ProService) { }

  public pro: product[] = [];

  ngOnInit(): void {
    this.p.getProducts().subscribe(pro => {
      this.pro = pro
      })
  }
}
