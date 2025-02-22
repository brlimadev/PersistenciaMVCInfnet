import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banda } from '../model/banda';
import { Album } from '../model/album';

@Injectable({
  providedIn: 'root',
  
})
export class BandaService {

  private url = "https://localhost:7206/api/Banda"

  constructor(private httpClient: HttpClient) { }

  public getBanda() : Observable<Banda[]> {
     return this.httpClient.get<Banda[]>(this.url, this.setAuthenticationHeader());
  }

  public getBandaPorId(id: string) : Observable<Banda> {
    return this.httpClient.get<Banda>(`${this.url}/${id}`, this.setAuthenticationHeader());
  }

  public getAlbunsBanda(id: string) : Observable<Album[]> {
    return this.httpClient.get<Album[]>(`${this.url}/${id}/albums`, this.setAuthenticationHeader());
  }

  private setAuthenticationHeader() {

    let access_token = sessionStorage.getItem("access_token");

    let options = {
      headers: new HttpHeaders().set("Authorization", `Bearer ${access_token}`)
    }

    return options;
  }
}