import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  userList: any;
  userListDragged: any;
  constructor(private userService: UserService, private router: Router) {
    this.users = [new User()];
   }

  ngOnInit() {
    this.getUsers();
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  getUsers() {
    this.userService.getUsers().subscribe(res => {
      this.userList = res.results;
    });
  }

  detailUser(user: User) {
    this.router.navigate(['profile', user.login.uuid]);
  }
}
