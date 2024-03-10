import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Suino } from '../model/suino';
import { Observable, catchError, map, retry, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private endpoint = "https://suinocultura-31ff3-default-rtdb.firebaseio.com";
  
  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getSuinos(): Observable<Suino[]> {
    return this.http
      .get<Suino[]>(`${this.endpoint}/suinos.json`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
  
  adicionarSuino(suino: Suino): Observable<void> {
    
    const url = `${this.endpoint}/suinos/${suino.brinco}.json`;
    return this.http.put<void>(url, suino, this.httpOptions)
      .pipe(
        tap(() => console.log(`Suíno adicionado com brinco ${suino.brinco}`)),
        catchError(this.handleError)
      );
  }

  getSuinoPorBrinco(brinco: string): Observable<Suino | null> {
    const url = `${this.endpoint}/suinos/${brinco}.json`;
    
    return this.http.get<Suino>(url)
      .pipe(
        catchError(this.handleError)
      );
  }
  

  atualizeSuino(brinco: string, suino: Suino): Observable<void> {
    const url = `${this.endpoint}/suinos/${brinco}.json`;
    return this.http.put<void>(url, suino, this.httpOptions)
      .pipe(
        tap(() => console.log(`Suíno com brinco ${brinco} atualizado com sucesso`)),
        catchError(this.handleError)
      );
  }

  deletaSuino(brinco: string): Observable<void> {
    const url = `${this.endpoint}/suinos/${brinco}.json`;
    return this.http.delete<void>(url, this.httpOptions)
      .pipe(
        tap(() => console.log(`Suíno com brinco ${brinco} excluído com sucesso`)),
        catchError(this.handleError)
      );
  }
  
  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }

    return throwError(() => new Error(errorMessage));
  }

}
