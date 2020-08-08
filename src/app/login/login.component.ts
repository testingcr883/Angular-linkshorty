import { Component, OnInit } from '@angular/core';
import {DetailserviceService} from '../services/detailservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logindetails={};
  constructor(private _DetailserviceService:DetailserviceService) { }
  loginsubmit()
  {
    this._DetailserviceService.logindetails(this.logindetails).subscribe(data=>{
        console.log(data);

    });
  }
  ngOnInit() {
  }

}
