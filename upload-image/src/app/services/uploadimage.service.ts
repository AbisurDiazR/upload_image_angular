import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadimageService {

  URL = 'http://localhost/PruebasAngular/';

  constructor(private http:HttpClient) { }

  upload(archivo){
    return this.http.post(`${this.URL}subirArchivo.php`, JSON.stringify(archivo));
  }
}
