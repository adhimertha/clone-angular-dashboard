import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
} from "@angular/core";
import { UtilService } from "src/app/util.service";

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
  @Input() isLoading = false;
  @Input() autocompleteStatus = "'off'";
  @Input() loginButtonText = "LOGIN";
  @Input() loginButtonTextLoading = "LOADING...";

  @Output() submit: EventEmitter<any> = new EventEmitter();

  loginButtonTextState = this.loginButtonText;
  showPassword = false;
  companyId = "";
  username = "";
  password = "";

  usernameError = "";
  passwordError = "";
  companyIdError = "";

  emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(public util?: UtilService) {}

  ngOnInit(): void {
    this.loginButtonTextState = this.loginButtonText;
  }

  ngOnChanges(changes: any) {
    if (!!changes.isLoading) {
      this.isLoading = changes.isLoading.currentValue;
      if (!this.isLoading) {
        this.ngOnInit();
      }
    }
  }

  usernameValidation() {
    let error = true;
    const countEmail =
      this.username.length <= this.util.maxInputEmailLengthInt ? false : true;
    if (
      !this.emailRegex.test(this.username) ||
      !!countEmail ||
      this.username.endsWith("con")
    ) {
      this.usernameError = "Please enter a valid email";
    } else if (!this.util.ctypeSpace(this.username)) {
      this.usernameError = "Please fill your email";
    } else {
      error = false;
      this.usernameError = "";
    }
    return error;
  }

  passwordValidation() {
    let error = true;
    if (this.password.length < 8) {
      this.passwordError = "Please enter a valid password";
    } else if (!this.util.ctypeSpace(this.password)) {
      this.passwordError = "Please fill your password";
    } else {
      error = false;
      this.passwordError = "";
    }
    return error;
  }

  companyIdValidation() {
    let error = true;
    if (this.companyId.length < 1) {
      this.companyIdError = "Please enter a valid company identification";
    } else if (!this.util.ctypeSpace(this.companyId)) {
      this.companyIdError = "Please enter a valid company identification";
    } else if (!this.util.nameWithSpecialCharXRegexp.test(this.companyId)) {
      this.companyIdError = "Please enter a valid company identification";
    } else {
      error = false;
      this.companyIdError = "";
    }
    return error;
  }

  // set data
  setCompanyId(event: CustomEvent) {
    this.companyId = (<HTMLInputElement>event.target).value.trim();
  }
  setUsername(event: CustomEvent) {
    this.username = (<HTMLInputElement>event.target).value.trim();
  }
  setPassword(event: CustomEvent) {
    this.password = (<HTMLInputElement>event.target).value;
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  // clear error msg
  clearError() {
    this.usernameError = "";
    this.passwordError = "";
    this.companyIdError = "";
  }

  // submit
  loginSubmit() {
    // dont submit when loading
    if (this.isLoading) {
      return;
    }

    // if (!this.util.isModalOpen()) {
    const usernameValidation = this.usernameValidation();
    const passwordValidation = this.passwordValidation();
    const companyIdValidation = this.companyIdValidation();

    if (!usernameValidation && !passwordValidation && !companyIdValidation) {
      this.clearError();
      this.submit.emit({
        formData: {
          username: this.username.trim(),
          password: this.password,
          companyId: this.companyId,
        },
      });
      this.loginButtonTextState = this.loginButtonTextLoading;
    }
    // }
  }
}
