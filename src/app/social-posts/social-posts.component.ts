import { Component, OnInit } from "@angular/core";
import { Post } from "../interfaces/post";

@Component({
  selector: "app-social-posts",
  templateUrl: "./social-posts.component.html",
  styleUrls: ["./social-posts.component.css"]
})
export class SocialPostsComponent implements OnInit {
  show: boolean = false;
  listOfPosts: Post[] = [
    { title: "Grand Circus", thought: "Grand Circus is cool." },
    { title: "Ritual", thought: "Ritual is a well-developed app." },
    { title: "Scott", thought: "Scott rides scooters." }
  ];

  constructor() {}

  ngOnInit(): void {}

  onSubmit(post: Post) {
    this.listOfPosts.unshift(post);
    this.show = false;
  }

  onDelete(index: number) {
    this.listOfPosts.splice(index, 1);
  }
  showForm() {
    this.show = !this.show;
  }
}
