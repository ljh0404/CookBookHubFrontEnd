import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RecipePageComponent } from './pages/recipe-page/recipe-page.component';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputNumberModule } from 'primeng/inputnumber';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { BodyComponent } from './layout/body/body.component';
import { ChipModule } from 'primeng/chip';
import { RecipesResultsComponent } from './pages/recipes-results/recipes-results.component';
import { RecipeDetailsComponent } from './pages/recipe-details/recipe-details.component';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { SearchAllComponent } from './pages/search-all/search-all.component';
import { HeaderComponent } from './layout/header/header.component';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { SliderModule } from 'primeng/slider';
import { ChipsModule } from 'primeng/chips';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CarouselModule } from 'primeng/carousel';
import { SearchAllRedirectComponent } from './pages/search-all-redirect/search-all-redirect.component';
import { TabMenuModule } from 'primeng/tabmenu';


@NgModule({
  declarations: [
    AppComponent,
    RecipePageComponent,
    SideBarComponent,
    BodyComponent,
    RecipesResultsComponent,
    RecipeDetailsComponent,
    SearchAllComponent,
    HeaderComponent,
    PaginatorComponent,
    NotFoundComponent,
    DashboardComponent,
    SearchAllRedirectComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    FieldsetModule,
    MultiSelectModule,
    InputNumberModule,
    SidebarModule,
    AvatarModule,
    AvatarGroupModule,
    ChipModule,
    DialogModule,
    TabViewModule,
    TableModule,
    FormsModule,
    CheckboxModule,
    SliderModule,
    ChipsModule,
    BreadcrumbModule,
    CarouselModule,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
