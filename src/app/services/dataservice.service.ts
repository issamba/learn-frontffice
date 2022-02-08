import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

import {tap} from 'rxjs/operators';

import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(
    private http: HttpClient
  ) {
    this.GetToken();
  }

  GetToken() {

  }


  /* We send token in the HTTPHeader 'Authorization' but because of CORS this  make each get request send an OPTION request first */


  post(url, data?): Observable<any> {
    return this.http.post<any>(environment.apiUrl + url, data).pipe(
      tap(
        res => {
        },
        error => this.unknownErrorNotification(error)
      )
    );
  }

  put(url, data?): Observable<any> {
    return this.http.put<any>(environment.apiUrl + url, data).pipe(
      tap(
        res => {
        },
        error => this.unknownErrorNotification(error)
      )
    );
  }

  /** @deprecated Use Custom delete method and static URL instead   */
  delete(url, data?): Observable<any> {
    return this.http.delete<any>(environment.apiUrl + url, data).pipe(
      tap(
        res => {
        },
        error => this.unknownErrorNotification(error)
      )
    );
  }


  private unknownErrorNotification(err) {

  }

  private constructFilter(filterObj) {
    let filter = '?';
    for (const _filter in filterObj) {
      if (filterObj.hasOwnProperty(_filter)) {
        filter = filter + _filter + '=';
        if (typeof filterObj[_filter] === 'string') {
          filter = filter + encodeURIComponent(filterObj[_filter]).replace('\'', '\\\'');
        } else {
          filter = filter + encodeURIComponent(String(filterObj[_filter]));
        }
        filter += '&';
      }
    }
    return filter = filter.substring(0, filter.length - 1);
  }

  /**
   * this method is created to invoke http get method. this method should replace get method
   * @param url the uRL
   * @param param parameter object
   */
  get(url: string, param?: object): Observable<any> {
    if (param) {
      return this.http.get<any>(environment.apiUrl + url, {params: this.maptoHttpParams(param)}).pipe(
        tap(
          data => {
          },
          error => this.unknownErrorNotification(error)
        )
      );
    } else {
      return this.http.get<any>(environment.apiUrl + url).pipe(
        tap(
          data => {
          },
          error => this.unknownErrorNotification(error)
        )
      );
    }
  }

  /**
   * map the param object ot HTTP param
   * @param param parameter object
   */
  maptoHttpParams(param: object): HttpParams {
    let httpParams = new HttpParams();
    // Mapping the params to HttpParams object
    Object.keys(param).forEach(e => {
        httpParams = httpParams.set(e, param[e]);
      }
    );
    return httpParams;
  }

  /**
   * this method is created to invoke http DELETE method. this method should replace delete method
   * @param url the URL
   * @param param parameter object
   */
  customDelete(url: string, param?: object): Observable<any> {
    return this.http.delete<any>(environment.apiUrl + url, {params: this.maptoHttpParams(param)}).pipe(
      tap(
        data => {
        },
        error => this.unknownErrorNotification(error)
      )
    );
  }

}
