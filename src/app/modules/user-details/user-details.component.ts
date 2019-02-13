import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }
  currentUserId: any;
  userDetails: any;
  ngOnInit() {
    this.route.params.subscribe(params => {
     this.currentUserId = params['id'];
    });
    this.getUserDetails();
  }

  getUserDetails() {
    this.userDetails = this.userService.getUserById(this.currentUserId);
    console.log(this.userDetails);
    if (!this.userDetails) {
        this.router.navigate(['/']);
    }
  }

}
