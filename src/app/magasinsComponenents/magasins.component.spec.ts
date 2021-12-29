import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { magasinsComponent } from './magasins.component';

describe('DashboardComponent', () => {
  let component: magasinsComponent;
  let fixture: ComponentFixture<magasinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ magasinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(magasinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
