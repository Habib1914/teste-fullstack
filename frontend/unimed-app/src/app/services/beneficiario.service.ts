import { Injectable } from '@angular/core';
import  { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Beneficiario } from '../models/beneficiario';
@Injectable({
  providedIn: 'root'
})
export class BeneficiariosService {
  apiUrl: string = environment.apiURLBase + `/beneficiarios`;
  
  constructor(private http: HttpClient) { }
  

  salvar(beneficiario: Beneficiario) : Observable<Beneficiario> {
    return this.http.post<Beneficiario>(`${this.apiUrl}`, beneficiario);
  }

  
  getBeneficiarios(params?: any) : Observable<Beneficiario[]>{
    let httpParams = new HttpParams();
    for (const key in params) {
      if (params.hasOwnProperty(key) && params[key]) {
        httpParams = httpParams.append(key, params[key].toString());
      }
    }
    return this.http.get<Beneficiario[]>(`${this.apiUrl}`, { params: httpParams});
  }

  getProductPage() : Observable<Beneficiario[]> {
    return this.http.get<Beneficiario[]>(this.apiUrl);
  }

  getBeneficiarioById(id: number) : Observable<Beneficiario>{
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateBeneficiario(beneficiario: Beneficiario)  : Observable<any>{
    return this.http.put<Beneficiario>(`${this.apiUrl}/${beneficiario.id}`, beneficiario);
  }

  deleteBeneficiario(beneficiario: Beneficiario) : Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${beneficiario.id}`);
  }



  
}