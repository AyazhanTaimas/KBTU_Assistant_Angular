// support.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit() {
    // For now, we can just log the form data to the console
    console.log('Support Form Submitted', this.name, this.email, this.message);

    // In a real application, you would send this data to a backend server for processing
    alert('Thank you for contacting support. We will respond shortly.');

    // Reset the form
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
