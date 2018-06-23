import { FormsModule } from '@angular/forms';
import { BookFormComponent } from './book-form.component';
import { BookListComponent } from './book-list.component';
import { DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
/* 
describe('BookListComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [BookListComponent, BookFormComponent]
    });
  });
  it('should work', () => {
    let fixture =
      TestBed.createComponent(BookListComponent);
    expect(fixture.componentInstance instanceof BookListComponent)
      .toBe(true, 'should create BookListComponent');
  });
  it('should have 3 rows when 2 books passed in', () => {
    let books: any = [{
      title: "The Lord Of The Rings",
      author: "J R R Tolkien",
      bookId: 1
    }, {
      title: "The Hobbit",
      author: "J R R Tolkien",
      bookId: 2
    }];

    let fixture = TestBed.createComponent(BookListComponent);
    let comp = fixture.componentInstance;
    let dbElm = fixture.debugElement.query(By.css('div'));
    let elm = dbElm.nativeElement;
    comp.books = books;
    fixture.detectChanges();
    let trs = elm.querySelectorAll('tr');
    expect(trs.length).toBe(3);

  })
});
 */
describe('BookList', () => {
    //bonus
    let comp: BookListComponent;
    let fixture: ComponentFixture < BookListComponent > ;
    let elm: HTMLElement;
    let dbElm: DebugElement;
    let books: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [BookListComponent, BookFormComponent]
        });
        //bonus
        fixture = TestBed.createComponent(BookListComponent);
        comp = fixture.componentInstance;
        dbElm = fixture.debugElement.query(By.css('div'));
        elm = dbElm.nativeElement;
        books = [{
            title: "The Lord Of The Rings",
            author: "J R R Tolkien",
            bookId: 1
        }, {
            title: "The Hobbit",
            author: "J R R Tolkien",
            bookId: 2
        }];

    });
    it('should work', () => {
        expect(fixture.componentInstance instanceof BookListComponent).toBe(true, 'should create BookListComponent');
    });

    it('should have three table rows when two books passed in', () => {
        comp.books = books;
        fixture.detectChanges();
        let trs = elm.querySelectorAll('tr');
        expect(trs.length).toBe(3);
    });
    //bonus
    it('to have LOTR as text of first td element', () => {
        comp.books = books;
        fixture.detectChanges();
        let td = dbElm.query(By.css('td')).nativeElement;
        expect(td.textContent).toEqual('The Lord Of The Rings');
    });
    it('should add book to array when addBook called', () => {
        comp.books = books;
        comp.addBook({ title: "test", author: 'me', cover: "", bookId: -1 });
        fixture.detectChanges();
        expect(books.length).toBe(3);
    });
});
