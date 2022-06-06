import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment as env } from 'src/environments/environment';
import { APIResponse, Laptop } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getLaptopList(
    ordering: string,
    search?: string
  ): Observable<APIResponse<Laptop>> {
    let params = new HttpParams().set('ordering', ordering);

    if (search) {
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }

    return this.http.get<APIResponse<Laptop>>(`${env.BASE_URL}/laptops`, {
      params: params,
    });
  }

  getLaptopDetails(id: string): Observable<Laptop> {
    const laptopInfoRequest = this.http.get(`${env.BASE_URL}/laptops/${id}`);
    const laptopTrailersRequest = this.http.get(
      `${env.BASE_URL}/laptops/${id}/movies`
    );
    const laptopScreenshotsRequest = this.http.get(
      `${env.BASE_URL}/laptops/${id}/screenshots`
    );

    return forkJoin({
      laptopInfoRequest,
      laptopScreenshotsRequest,
      laptopTrailersRequest,
    }).pipe(
      map((resp: any) => {
        return {
          ...resp['laptopInfoRequest'],
          screenshots: resp['laptopScreenshotsRequest']?.results,
          trailers: resp['laptopTrailersRequest']?.results,
        };
      })
    );
  }
}
