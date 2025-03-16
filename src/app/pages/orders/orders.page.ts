import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Storage } from '@ionic/storage-angular';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonItem,
  IonLabel,
  IonRow,
  IonText, IonSpinner, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { FormService } from 'src/app/services/form.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardTitle, IonCardHeader, IonCard, 
    IonSpinner,
    IonText,
    IonRow,
    IonLabel,
    IonItem,
    IonContent,
    IonHeader,
    IonToolbar,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
  ],
  providers: [Storage],
})
export class OrdersPage implements OnInit {
  approverName: string = 'Raja Kanniappan';
  data: any[] = [];
  ordersData: any;
  private storage: Storage;
  private orderservice = inject(FormService);
  private utility = inject(UtilityService);

  constructor() {
    this.storage = inject(Storage);
  }

async  ngOnInit() {
   await this.storage.create();
        try {
          const token = await this.storage.get('token');
          //const addressNo = await this.storage.get('addressNo');
          const addressNo = '404829';

          // Construct orders data using retrieved values
          this.ordersData = {
            token,
            formName: 'P43081_W43081A',
            outputType: 'VERSION2',
            formServiceAction: 'R',
            bypassFormServiceEREvent: true,
            returnControlIDs: '1[21]',
            query: {
              condition: [
                {
                  value: [
                    {
                      content: addressNo,
                      specialValueId: 'LITERAL',
                    },
                  ],
                  controlId: '1[23]',
                  operator: 'EQUAL',
                },
              ],
              autoFind: true,
              matchType: 'MATCH_ANY',
              autoClear: true,
            },
          };

          // Call the function to fetch order data
          this.fetchorderData(this.ordersData);
        } catch (error) {
          console.error('Error retrieving storage data:', error);
        }
    this.fetchorderData(this.ordersData);
  }

  fetchorderData(data: any) {
    this.orderservice.getOrders(data).subscribe({
      next: (data) => {
        if (data.fs_P43081_W43081A.errors.length === 0) {
          console.log('orders retrieved:', data);
          const rowset = data.fs_P43081_W43081A.data.gridData.rowset || [];
          const countMap: { [key: string]: number } = {};

          rowset.forEach((row: any) => {
            const type = row.z_DCTO_21?.internalValue;
            if (type) {
              countMap[type] = (countMap[type] || 0) + 1;
            }
          });

          this.data = Object.keys(countMap).map((key) => ({
            name: key,
            value: countMap[key],
          }));
        } else {
          console.error('Invalid response:', data);
        }
      },
      error: async (error) => {
        this.utility.showErrorPopup(error.error.message);
      },
    });
  }
}
