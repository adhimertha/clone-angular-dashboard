import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
} from "@angular/core";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent implements OnInit {
  @Input() defaultUsername = "";
  @Input() defaultPassword = "";
  @Input() defaultCompanyId = "";
  @Input() showLoading = false;
  @Input() isInLoading = false;
  @Input() autocompleteStatus = "'off'";

  @Output() submit = new EventEmitter();

  public companyId = "";
  public username = "";
  public password = "";

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChange) {
    // console.log(changes);
  }

  setCompanyIdData(id: string) {
    this.companyId = id;
  }
}
