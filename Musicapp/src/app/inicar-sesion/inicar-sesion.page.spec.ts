import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicarSesionPage } from './inicar-sesion.page';

describe('InicarSesionPage', () => {
  let component: InicarSesionPage;
  let fixture: ComponentFixture<InicarSesionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InicarSesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
