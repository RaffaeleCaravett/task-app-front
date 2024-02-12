import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiornoComponent } from './giorno.component';

describe('GiornoComponent', () => {
  let component: GiornoComponent;
  let fixture: ComponentFixture<GiornoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiornoComponent]
    });
    fixture = TestBed.createComponent(GiornoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
