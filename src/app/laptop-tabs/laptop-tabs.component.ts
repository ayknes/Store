import { Component, Input, OnInit } from '@angular/core';
import { Laptop } from 'src/app/models';

@Component({
  selector: 'app-laptop-tabs',
  templateUrl: './laptop-tabs.component.html',
  styleUrls: ['./laptop-tabs.component.scss']
})
export class LaptopTabsComponent implements OnInit {
  @Input() laptop: Laptop;
  
  constructor() { }

  ngOnInit(): void {
  }

}
