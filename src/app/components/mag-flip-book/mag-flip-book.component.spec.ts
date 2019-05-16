import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagFlipBookComponent } from './mag-flip-book.component';

describe('MagFlipBookComponent', () => {
  let component: MagFlipBookComponent;
  let fixture: ComponentFixture<MagFlipBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagFlipBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagFlipBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
