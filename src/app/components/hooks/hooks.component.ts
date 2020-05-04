import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-hooks",
  templateUrl: "./hooks.component.html",
  styleUrls: ["./hooks.component.css"],
})
export class HooksComponent implements OnInit {
  constructor() {}
  data: string;
  ngOnChanges() {
    this.data = "ngOnChange";
    console.log(`ngOnChanges - data is ${this.data}`);
  }

  ngOnInit() {
    this.data = "ngOnInit";
    console.log(`ngOnInit  - data is ${this.data}`);
  }

  ngDoCheck() {
    this.data = "ngDoCheck";
    console.log(`ngDoCheck  - data is ${this.data}`);
  }

  ngAfterContentInit() {
    this.data = "ngAfterContentInit";
    console.log(`ngAfterContentInit  - data is ${this.data}`);
  }

  ngAfterContentChecked() {
    this.data = "ngAfterContentChecked";
    console.log(`ngAfterContentChecked  - data is ${this.data}`);
  }

  ngAfterViewInit() {
    this.data = "ngAfterViewInit";
    console.log(`ngAfterViewInit  - data is ${this.data}`);
  }

  ngAfterViewChecked() {
    this.data = "ngAfterViewChecked";
    console.log(`ngAfterViewChecked  - data is ${this.data}`);
  }

  ngOnDestroy() {
    this.data = "ngOnDestroy";
    console.log(`ngOnDestroy  - data is ${this.data}`);
  }
}
