import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
})
export class ChildComponent implements OnInit {
  constructor() {}
  msg: string;
  ngOnInit() {
    this.msg = "Messages from child component";
  }
}
