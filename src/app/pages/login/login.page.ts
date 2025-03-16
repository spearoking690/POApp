import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import {
  IonContent,
  IonGrid,
  IonItem,
  IonIcon,
  IonButton,
  IonCol,
  IonCard,
  IonRow,
  IonInput,
} from '@ionic/angular/standalone';
import { TokenService } from 'src/app/services/token.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonInput,
    IonRow,
    IonCard,
    IonCol,
    IonButton,
    IonIcon,
    IonItem,
    IonGrid,
    IonContent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [Storage],
})
export class LoginPage implements OnInit {
  userName: string = '';
  password: string = '';
  environment: string = '';
  errorMsg: string = '';

  private storage = inject(Storage);
  private loginsrvc = inject(TokenService);
  private router = inject(Router);
  private utility = inject(UtilityService);

  constructor() {}

  async ngOnInit() {
    this.errorMsg = '';
   await this.storage.create();
  }

  async onLogin() {
    console.log('Username:', this.userName);
    console.log('Password:', this.password);

    if (this.userName === '' || this.password === '') {
      this.utility.showErrorPopup('Please enter valid credentials');
      return;
    }

    const requestData = {
      username: this.userName,
      password: this.password,
    };

    this.loginsrvc.retrieveToken(requestData).subscribe({
      next: (data) => {
        if (data.userInfo) {
          console.log('Token retrieved:', data);
          // Store the token in Ionic Storage
          this.storage.set('token', data.userInfo.token).then(() => {
            this.storage.set('addressNo', data.userInfo.addressNumber);
            console.log('Token and AN8 stored successfully');
            // Redirect to another page after successful login
            this.router.navigate(['/orders']);
          });
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
