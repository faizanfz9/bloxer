import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatBlogsComponent } from './cat-blogs.component';

describe('CatBlogsComponent', () => {
  let component: CatBlogsComponent;
  let fixture: ComponentFixture<CatBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
