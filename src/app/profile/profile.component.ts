import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = {
    username: 'John Doe',
    bio: 'I love programming!',
    profilePicture: 'https://via.placeholder.com/150' // Default picture
  };

  isEditMode = false;

  constructor() { }

  ngOnInit(): void {}

  // Toggle edit mode
  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  // Save profile changes
  saveProfile() {
    this.isEditMode = false;
    // Here you could also implement a call to the server to save changes
    console.log('Profile saved:', this.user);
  }
}
