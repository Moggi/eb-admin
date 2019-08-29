import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleColorEditorComponent } from './simple-color-editor.component';

describe('SimpleColorEditorComponent', () => {
  let component: SimpleColorEditorComponent;
  let fixture: ComponentFixture<SimpleColorEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleColorEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleColorEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
