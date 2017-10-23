import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Content } from './content';

@Injectable()
export class ContentService {

  private contentsUrl = 'api/contents';

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  /*
  getChapters(): Promise<Chapter[]> {
    return this.http.get(this.chaptersUrl)
      .toPromise()
      .then(response => response.json().data as Chapter[])
      .catch(this.handleError);
  }
  */

  getContent(id: number) : Promise<Content> {
    const url = `${this.contentsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Content)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  /*
  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.http.post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
    .toPromise()
    .then(response => response.json().data as Hero)
    .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(()=>resolve(this.getHeroes()), 2000);
    });
  }
  */
}