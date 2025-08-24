import { Component, signal, computed, Input, input, Output, EventEmitter,output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)

// type User = {
//   id : string;
//   avatar: string;
//   name: string;
// }

interface User {
  id : string;
  avatar: string;
  name: string;
}
//  type or interface both we can use. interface is only used to defined objects. but type used for many purposes

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


  // state management using signals
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/'+ this.selectedUser().avatar)

  // onSelectUser(){
  //   console.log("Clicked!")
  //   const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }

  // Using signal input method
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => {
  //   'assets/users/'+ this.avatar();
  // });
  // onSelectUser(){}

  // using input method and creating multiple users
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  // 
  
  @Input({required: true}) user! : User;
  @Output() select = new EventEmitter<string>();
  // select = output<string>();
  
  get imagePath(){
    // return 'assets/users/'+ this.avatar;
    return 'assets/users/'+ this.user.avatar;
  }

  onSelectUser(){
    // this.select.emit(this.id);
    this.select.emit(this.user.id);
  }
  
}
