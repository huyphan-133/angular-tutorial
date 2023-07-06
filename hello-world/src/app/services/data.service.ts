import { HttpClient } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { BadRequestError } from '../common/bad-request-error';
import { NotFoundError } from '../common/not-found-error';


export class DataService {
  constructor(private url: string, private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get(this.url)
      .pipe(
        map(response => response as Object[]),
        catchError(this.handlerError)
      );
  }

  create(resource: any): Observable<any> {
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
      map(response=>(response as any)['id']),
      catchError(this.handlerError)
    );
  }

  update(resourse: any): Observable<any> {
    return this.http.patch(this.url + '/' + resourse.id, JSON.stringify({ isRead: true }))
      .pipe(
        catchError(this.handlerError)
      )
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id).pipe(
      catchError(this.handlerError));
  }

  private handlerError(error: Response): ObservableInput<any> {
    if (error.status === 400)
      throw new BadRequestError(error.json)
    if (error.status === 404)
      throw new NotFoundError()
    throw new AppError(error)
  }
}
