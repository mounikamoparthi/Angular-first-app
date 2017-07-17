import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  notes = [
    {title: 'first'},
    {title: 'second'}
  ];
  invoked(event) {
    console.log('Invoked', event);
  }
  constructor() { }

  ngOnInit() {
  }

}
