import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estoria } from './estoria';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

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

    getEstorias(): Observable<Estoria[]> {
      return this.httpClient.get<Estoria[]>(this.URL);       
    }

    excluirEstoria(id: number): Observable<Estoria> {
      const url = `${this.URL}/${id}`;
  
      return this.httpClient.delete<Estoria>(url, this.httpOptions);
    }
}