import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { SimplElementNgModule } from '@simpl/element-ng';

import { HomeComponent as TestComponent } from './home.component';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(() => TestBed.configureTestingModule({
    declarations: [TestComponent],
    imports: [
      HttpClientTestingModule,
      TranslateModule.forRoot(),
      SimplElementNgModule
    ]
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
