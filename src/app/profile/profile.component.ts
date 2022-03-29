import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any = '';
  name = 'asdasdas';


  constructor(private _globalService: GlobalService,
    private spinner: NgxSpinnerService) { }

    ngOnInit(): void {
      this.spinner.show();

      setTimeout(() => {
        this._globalService.getAll().subscribe((profiles: any) => {
          console.log(profiles);
          this.profile = profiles;
          console.log('Profile',this.profile);

      });
      this.spinner.hide();
    }, 600);
    }
}
