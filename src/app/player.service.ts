import { Injectable } from '@angular/core';
import { Player } from './player';
import { PLAYERS } from './mock-players';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
private playersUrl = 'api/players';  // URL to web api

export class PlayerService {
  constructor(private http: HttpClient,
              private messageService: MessageService) { }
  getPlayers(): Observable<Player[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('PlayerService: fetched players');
    return of(PLAYERS);
  }
  getPlayer(id: number): Observable<Player[]> {
    const url = `${this.playersUrl}/${id}`;
    return this.htttp.get<Player>(url).pipe(tap(_ => this.log(`fetched player id=${id}`))),
        catchError(this.handleError<Player>(`getPlayer id=${id}`));
  }
  /** PUT: update the hero on the server */
  updatePlayer (player: Player): Observable<any> {
    return this.http.put(this.playersUrl, player, httpOptions).pipe(
        tap(_ => this.log(`updated player id=${player.id}`)),
        catchError(this.handleError<any>('updatePlayer'))
    );
  }
  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.playersUrl).pipe(catchError(this.handleError('getHeroes', [])));
  }
  private log(message: string) {
    this.messageService.add('PlayerService: ' + message);
  }

}
