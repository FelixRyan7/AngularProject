import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeNombreComponent } from './pipe-nombre.component';

describe('PipeNombreComponent', () => {
  let component: PipeNombreComponent;
  let fixture: ComponentFixture<PipeNombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeNombreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipeNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
