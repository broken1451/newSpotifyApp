import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaSearchComponent } from './tarjeta-search.component';

describe('TarjetaSearchComponent', () => {
  let component: TarjetaSearchComponent;
  let fixture: ComponentFixture<TarjetaSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TarjetaSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarjetaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
