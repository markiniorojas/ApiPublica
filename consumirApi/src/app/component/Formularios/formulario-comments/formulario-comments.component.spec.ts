import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCommentsComponent } from './formulario-comments.component';

describe('FormularioCommentsComponent', () => {
  let component: FormularioCommentsComponent;
  let fixture: ComponentFixture<FormularioCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCommentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
