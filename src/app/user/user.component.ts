import { Component, signal, computed, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  // State management using Zone.js
  // selectedUser = DUMMY_USERS[randomIndex]

  // get imagePath(){
  //   return 'assets/users/'+ this.selectedUser.avatar
  // }

  // onSelectUser(){
  //   console.log("Clicked!")
  //   const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)
  //   this.selectedUser = DUMMY_USERS[randomIndex]
  // }

  // using input method and creating multiple users
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

  get imagePath(){
    return 'assets/users/'+ this.avatar;
  }

  onSelectUser(){}
  

  // state management using signals
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/'+ this.selectedUser().avatar)

  // onSelectUser(){
  //   console.log("Clicked!")
  //   const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }



}
