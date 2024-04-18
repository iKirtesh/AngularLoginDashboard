import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf

  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent implements OnInit {
  username = '';
  password = '';
  userList = [{
    name: "Shivendra",
    pass: "123"
  },
    {
      name: "Shiv",
      pass: "345"
    }];
  AddData = () => {
    console.log("clicked");
    let temp = {name: this.username, pass: this.password}
    this.userList.push(temp);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
