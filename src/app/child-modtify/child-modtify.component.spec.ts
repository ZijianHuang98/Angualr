import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildModtifyComponent } from './child-modtify.component';

describe('ChildModtifyComponent', () => {
  let component: ChildModtifyComponent;
  let fixture: ComponentFixture<ChildModtifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildModtifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildModtifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
