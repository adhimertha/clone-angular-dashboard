import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthModule } from "./auth/auth.module";
import { ShareModule } from "./share.module";
import { RouterModule } from "@angular/router";
import { NgxsModule } from "@ngxs/store";
import { AuthState } from "./auth/auth.state";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { LoadingBarRouterModule } from "@ngx-loading-bar/router";
import { LoadingBarModule } from "@ngx-loading-bar/core";
import { AuthLayoutComponent } from "./layout/auth-layout/auth-layout.component";
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";

export function HttpLoaderFactory(http: HttpClient) {
  const dateUnixTimestamp = new Date().getTime();
  return new TranslateHttpLoader(
    http,
    "./assets/i18n/",
    `.json?t=${dateUnixTimestamp}`
  );
}

@NgModule({
  declarations: [AppComponent, AuthLayoutComponent, MainLayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ShareModule,
    RouterModule,
    NgxsModule.forRoot([AuthState]),

    // Loading bar module
    LoadingBarRouterModule,
    LoadingBarModule,

    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
