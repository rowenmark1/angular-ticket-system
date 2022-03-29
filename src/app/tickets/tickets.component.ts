import { AppAuthService } from './../app-auth.service';
import { TicketsService } from './../tickets.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {


  constructor(private spinner: NgxSpinnerService,  private _ticketsService:TicketsService, private _appAuthService: AppAuthService) { }

    tickets : any = "";


  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
    this._ticketsService.getAll().subscribe(

      (tickets : any) => {
        console.log(tickets);
        this.tickets = tickets;
        this.spinner.hide();
      }, 1600);
      }
    )

  }

}
