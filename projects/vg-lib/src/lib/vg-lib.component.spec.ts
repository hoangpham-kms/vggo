import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VgLibComponent } from './vg-lib.component';

describe('VgLibComponent', () => {
  let component: VgLibComponent;
  let fixture: ComponentFixture<VgLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VgLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VgLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
