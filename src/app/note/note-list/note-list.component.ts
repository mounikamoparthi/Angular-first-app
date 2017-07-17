import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  @Input() myNotes; // parent to child communication if any changes made in child
  // doesnt reflect in parent but changes made in parent reflects in child

  @Output() myEvent = new EventEmitter();

  constructor() { }

  callParent() {
    this.myEvent.emit(7); // passing data from child to parent
  }
  ngOnInit() {
  }

}
