import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPagingComponent } from './landing-paging.component';

describe('LandingPagingComponent', () => {
  let component: LandingPagingComponent;
  let fixture: ComponentFixture<LandingPagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPagingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingPagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
