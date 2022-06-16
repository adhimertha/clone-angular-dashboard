import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthModule } from "./auth/auth.module";
import { ShareModule } from "./share.module";
import { RouterModule } from "@angular/router";
import { NgxsModule } from "@ngxs/store";
import { AuthState } from "./auth/auth.state";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ShareModule,
    RouterModule,
    NgxsModule.forRoot([AuthState]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
