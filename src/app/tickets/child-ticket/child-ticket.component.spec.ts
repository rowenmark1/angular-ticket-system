import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTicketComponent } from './child-ticket.component';

describe('ChildTicketComponent', () => {
  let component: ChildTicketComponent;
  let fixture: ComponentFixture<ChildTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
