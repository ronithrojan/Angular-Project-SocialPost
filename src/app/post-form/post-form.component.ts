import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.css"]
})
export class PostFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  addPost(form: NgForm) {
    console.log(form);
    this.submitted.emit(form.value);
  }
}
