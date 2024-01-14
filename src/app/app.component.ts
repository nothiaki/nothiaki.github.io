import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ContactComponent } from "./components/contact/contact.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, HomeComponent, FooterComponent, ProjectsComponent, ContactComponent]
})
export class AppComponent {

}
