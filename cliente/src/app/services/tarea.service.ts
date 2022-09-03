import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../models/tarea';


@Injectable({
  providedIn: 'root'
})
export class TareaService {

  url = 'http://localhost:4000/api/Listadetareas/';

  constructor(private http:HttpClient) { }

  getTareas() : Observable<any>{
     return this.http.get(this.url);
  }

  deleteTarea(id:string) : Observable<any>{
     return this.http.delete(this.url+id);
  }

  postTarea(tarea: Tarea) : Observable<any>{
     return this.http.post(this.url, tarea);
  }

  getTarea(id:string) : Observable<any>{
     return this.http.get(this.url+id);
  }

  putTarea(id:string, tarea:Tarea) : Observable<any>{
    return this.http.put(this.url+id,tarea);
  }
}
