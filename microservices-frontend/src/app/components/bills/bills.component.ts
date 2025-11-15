import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BillService } from '../../services/bill.service';
import { Bill } from '../../models/bill.interface';

@Component({
  selector: 'app-bills',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
  bill: Bill | null = null;
  billId: number = 1;
  loading = false;
  error: string | null = null;

  constructor(private billService: BillService) {}

  ngOnInit(): void {
    this.loadBill();
  }

  loadBill(): void {
    this.loading = true;
    this.error = null;
    this.billService.getBillById(this.billId).subscribe({
      next: (data) => {
        console.log('Bill data received:', data);
        this.bill = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load bill. Make sure the services are running and bill exists.';
        this.loading = false;
        console.error('Error loading bill:', err);
      }
    });
  }

  onBillIdChange(): void {
    if (this.billId && this.billId > 0) {
      this.loadBill();
    }
  }

  getTotalAmount(): number {
    if (!this.bill || !this.bill.productItems) return 0;
    return this.bill.productItems.reduce((total, item) => {
      return total + (item.quantity * item.unitPrice);
    }, 0);
  }
}

