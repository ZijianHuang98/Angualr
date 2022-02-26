import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb21Component } from './feb21.component';

describe('Feb21Component', () => {
  let component: Feb21Component;
  let fixture: ComponentFixture<Feb21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Feb21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
