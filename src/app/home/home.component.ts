import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Laptop } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public sort: string;
  public laptops: Array<Laptop>;
  private routeSub: Subscription;
  private laptopSub: Subscription;

  constructor(    
    private httpService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      if (params['laptop-search']) {
        this.searchLaptops('metacrit', params['laptop-search']);
      } else {
        this.searchLaptops('metacrit');
      }
    });
  }

  searchLaptops(sort: string, search?: string): void {
    this.laptopSub = this.httpService
      .getLaptopList(sort, search)
      .subscribe((laptopList: APIResponse<Laptop>) => {
        this.laptops = laptopList.results;
        console.log(laptopList);
      });
  }

  openLaptopDetails(id: string): void {
    this.router.navigate(['details', id]);
  }

  ngOnDestroy(): void {
    if (this.laptopSub) {
      this.laptopSub.unsubscribe();
    }

    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

}
