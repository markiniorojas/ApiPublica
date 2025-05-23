import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearUserComponent } from './crear-user.component';

describe('CrearFilmComponent', () => {
  let component: CrearUserComponent;
  let fixture: ComponentFixture<CrearUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
