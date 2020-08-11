import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example-container",
  templateUrl: "./example-container.component.html",
  styleUrls: ["./example-container.component.scss"],
})
export class ExampleContainerComponent implements OnInit {
  text = "";
  cityList = ["Ha Noi", "Ho Chi Minh", "Da Nang", "Nha Trang", "Vinh Long"];

  constructor() {}

  ngOnInit() {}
}
