import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-databinding",
  templateUrl: "./databinding.component.html",
  styleUrls: ["./databinding.component.css"],
})
export class DatabindingComponent implements OnInit {
  constructor() {}
  countOfStudents: string;
  button: string;
  ngOnInit() {
    this.countOfStudents = "Total Students are 30 ";
    this.button = "view";
  }
  selectStudent(stu) {
    alert(stu);
  }
}
