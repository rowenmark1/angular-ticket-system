import { TicketsService } from './../../tickets.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-child-ticket',
  templateUrl: './child-ticket.component.html',
  styleUrls: ['./child-ticket.component.css'],
  template:`<ul>
  <li *ngFor="let ticket of tickets">
      {{ticket.template.alias}}
  </li>
</ul>`,

})
export class ChildTicketComponent implements OnInit {

  ticketId : string = '';
  ticket : any = '';


  constructor(private _ticketService:TicketsService,   private spinner: NgxSpinnerService, private _router:Router, private _route:ActivatedRoute) { }

    ngOnInit(): void {
      this.spinner.show();
      setTimeout(() => {
      this._route.params.subscribe((params: any) => {
        this.ticketId = params.id;
        console.log(params);
        console.log(this.ticketId);
        this._ticketService.getById(this.ticketId).subscribe((ticket: any) => {
          this.ticket = ticket;
          this.spinner.hide();
        }, 1600);
        });
      });
    }
  }


