import { Component, ElementRef, HostListener, OnInit } from "@angular/core";

@Component({
  selector: "app-igloo-select-lang",
  templateUrl: "./igloo-select-lang.component.html",
  styleUrls: ["./igloo-select-lang.component.scss"],
})
export class IglooSelectLangComponent implements OnInit {
  public isOpen: boolean = false;

  constructor(private eRef: ElementRef) {}

  ngOnInit() {}

  toggleShow() {
    this.isOpen = !this.isOpen;
  }

  @HostListener("document:click", ["$event"])
  clickOutside(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}
