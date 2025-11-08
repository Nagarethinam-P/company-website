import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';

import { FormsModule,NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-contact',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  successMessage = '';
  errorMessage = '';

  constructor(private http: HttpClient) {}

  submitForm(form: NgForm) {
    if (form.invalid) return;

    const formData = form.value;

    this.http.post('https://localhost:7174/contact', formData).subscribe({
      next: () => {
        this.successMessage = '✅ Message sent successfully!';
        this.errorMessage = '';
        form.resetForm();
      },
      error: () => {
        this.errorMessage = '❌ Failed to send message. Try again later.';
        this.successMessage = '';
      }
    });
  }
}