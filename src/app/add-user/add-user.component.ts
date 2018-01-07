import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user = {
    firstName: null,
    lastName: null,
    email: null,
    address: {
      state: null
    }
  };


  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  addUser () {
    console.log(this.user);
    this.userService.addUser(this.user)
    .subscribe( user => console.log(user),
                error => console.log(error));
  }
}
