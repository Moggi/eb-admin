import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleColorRenderComponent } from './simple-color-render.component';

describe('SimpleColorRenderComponent', () => {
  let component: SimpleColorRenderComponent;
  let fixture: ComponentFixture<SimpleColorRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleColorRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleColorRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
