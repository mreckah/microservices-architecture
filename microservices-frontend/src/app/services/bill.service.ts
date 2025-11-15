import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bill } from '../models/bill.interface';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  private apiUrl = 'http://localhost:8083/bills';

  constructor(private http: HttpClient) {}

  getBillById(id: number): Observable<Bill> {
    return this.http.get<Bill>(`${this.apiUrl}/${id}`);
  }

  getAllBills(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}

