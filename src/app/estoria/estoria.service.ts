import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estoria } from './estoria';

@Injectable({ providedIn: 'root' })

export class EstoriaService {
    URL = 'http://localhost:3000/estorias';
  
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  
    constructor(private httpClient: HttpClient) {}

    salvar(estoria: Estoria): Promise<Estoria | undefined> {
    return this.httpClient
        .post<Estoria>(
        this.URL,
        JSON.stringify(estoria),
        this.httpOptions
        )
        .toPromise();
    }
}