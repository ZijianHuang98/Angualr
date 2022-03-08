import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPictureComponent } from './child-picture.component';

describe('ChildPictureComponent', () => {
  let component: ChildPictureComponent;
  let fixture: ComponentFixture<ChildPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
