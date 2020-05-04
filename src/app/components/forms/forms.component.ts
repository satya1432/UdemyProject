import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/product-form";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.css"],
})
export class FormsComponent implements OnInit {
  productForm: any = new Product();
  registerForm: FormGroup;
  submitted: boolean;
  constructor(private FormBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.FormBuilder.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
  createProduct() {
    console.log(this.productForm);
  }
  adduser() {
    alert("kk");
    console.log(this.registerForm.value);
    // this.submitted = true;
    // // stop here if form is invalid
    // if (this.registerForm.invalid) {
    //   return;
    // } else {
    //   this.submitted = false;
    // }
  }
}
