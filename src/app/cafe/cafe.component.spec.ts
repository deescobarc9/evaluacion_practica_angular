import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';
import { CafeComponent } from './cafe.component';
import { CafeService } from './cafe.service';
import { Cafe } from './cafe';

describe('CafeListComponent', () => {
    let component: CafeComponent;
    let fixture: ComponentFixture<CafeComponent>;
    let debug: DebugElement;

    beforeEach(async () => {
    TestBed.configureTestingModule({
        imports: [HttpClientModule],
        declarations: [ CafeComponent ],
        providers: [ CafeService ]
    })
    .compileComponents();
    });


    beforeEach(() => {
        fixture = TestBed.createComponent(CafeComponent);
        component = fixture.componentInstance;
        component.cafes = [
            new Cafe(faker.number.int(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.number.int(), faker.lorem.sentence()),
            new Cafe(faker.number.int(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.number.int(), faker.lorem.sentence()),
            new Cafe(faker.number.int(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.number.int(), faker.lorem.sentence()),
        ]
        fixture.detectChanges();
        debug = fixture.debugElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it("Component has a table", () => {
        expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
    });

    it("Component has a table with one thead", () => {
        expect(debug.query(By.css("thead")).childNodes.length).toBeGreaterThan(0);
    });

    it('should have four rows td', () => {
        expect(debug.queryAll(By.css('tr'))).toHaveSize(4);
    });
});