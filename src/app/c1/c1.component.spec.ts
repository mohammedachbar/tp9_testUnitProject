import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C1Component } from './c1.component';
import {DebugElement} from '@angular/core';

describe('C1 Component Test', () => {
    let c1: C1Component;
    let fixture: ComponentFixture<C1Component>;
    let C1HtmlElement: HTMLElement;
    let C1DebugElement: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [C1Component]
        }).compileComponents();

        fixture = TestBed.createComponent(C1Component);

        c1 = fixture.componentInstance;

        C1DebugElement = fixture.debugElement;

        C1HtmlElement = C1DebugElement.nativeElement;
    }));

    it('Le composant doit être instancié', () => {
      expect(c1).toBeTruthy();
  });

  it('La propriété nom doit avoir la valeur Mohammed !',
async(() => {
        expect(c1.nom).toEqual('Mohammed');
    }));

    expect(array).toContain('C');
});
