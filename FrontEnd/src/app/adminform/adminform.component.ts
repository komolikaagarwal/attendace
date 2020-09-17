import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../data.service';
@Component({
  selector: 'app-adminform',
  templateUrl: './adminform.component.html',
  styleUrls: ['./adminform.component.css']
})
export class AdminformComponent implements OnInit {
  nameProp;
  passwordProp;

  constructor(private router: Router, private ds: DataService) { }

  ngOnInit(): void {
  }
  signin() {

    this.signIn({ admin: this.nameProp, password: this.passwordProp })
      .subscribe((response) => {
        if (response.status == "ok") {
          this.router.navigate(['/attendance']);
        }
      })


  }

}
