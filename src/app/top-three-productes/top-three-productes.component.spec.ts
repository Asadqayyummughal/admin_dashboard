import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopThreeProductesComponent } from './top-three-productes.component';

describe('TopThreeProductesComponent', () => {
  let component: TopThreeProductesComponent;
  let fixture: ComponentFixture<TopThreeProductesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopThreeProductesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopThreeProductesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
