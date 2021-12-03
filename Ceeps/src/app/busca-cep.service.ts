import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BuscaCEPService {

  constructor(private httpClient: HttpClient) { }

  buscarCep(cep: any){
    return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`)
  }

}

