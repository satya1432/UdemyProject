import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators, NgForm } from "@angular/forms";
import { format } from "url";

@Component({
  selector: "app-submit",
  templateUrl: "./submit.component.html",
  styleUrls: ["./submit.component.css"],
})
export class SubmitComponent implements OnInit {
  public employeeform: FormGroup;
  empdetails: any = {};
  submitData: any;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
  onSubmit(f: NgForm) {
    this.submitData = this.empdetails;
    this.empdetails = {};
    f.resetForm();
  }
  closeView($event) {
    this.submitData = $event;
  }
}
