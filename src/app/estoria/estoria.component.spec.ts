import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoriaComponent } from './estoria.component';

describe('EstoriaComponent', () => {
  let component: EstoriaComponent;
  let fixture: ComponentFixture<EstoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
