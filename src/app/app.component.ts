import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
// import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  // imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
  dum_users = DUMMY_USERS
  // selectedUserId = 'u1'
  selectedUserId? : string;
  
  onSelectUser(id:string){
    console.log("Selected user with id:" + id )
    this.selectedUserId = id;
  }

  get selectedUser(){
    return this.dum_users.find((user) => user.id === this.selectedUserId)!  
    //Exclamation mark is compulsory because if no such users available then it would send undefined value which make the app crash
    // return this.dum_users.find((user) => user.id === this.selectedUserId)
    // without exclamation mark we use javascript object conditionals to work
  }
}
