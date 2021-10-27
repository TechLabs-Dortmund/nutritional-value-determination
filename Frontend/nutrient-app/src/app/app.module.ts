import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserService } from './service/userService';
import { HttpClientModule } from '@angular/common/http';
import { CameraComponent } from './camera/camera.component';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { FoodTableComponent } from './food-table/food-table.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { FoodService } from './service/foodService';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegisterUserComponent,
    CameraComponent,
    FoodTableComponent,
  ],
  imports: [
    BrowserModule,
    UploaderModule,
    AppRoutingModule,
    FormsModule,
    NgxDropzoneModule,
    HttpClientModule,
    GridModule,
  ],
  providers: [
    UserService,
    FoodService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
