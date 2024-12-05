import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './auth.component.html',
  standalone: true,
  styleUrls: ['./auth.component.css']
})
export class UserComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: AuthService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  addUser(): void {
    const newUser = { name: 'Alice', email: 'alice@example.com' };
    this.userService.registerUser(newUser).subscribe(() => {
      this.loadUsers(); // Refresh the user list
    });
  }

  //updateUser(id: number): void {
   // const updatedUser = { name: 'Updated Name', email: 'updated@example.com' };
   // this.userService.updateUser(id, updatedUser).subscribe(() => {
   //   this.loadUsers(); // Refresh the user list
   // });
  //}

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers(); // Refresh the user list
    });
  }
}
