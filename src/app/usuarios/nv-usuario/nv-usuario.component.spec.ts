import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvUsuarioComponent } from './nv-usuario.component';

describe('NvUsuarioComponent', () => {
  let component: NvUsuarioComponent;
  let fixture: ComponentFixture<NvUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
