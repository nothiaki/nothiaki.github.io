import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../components/home/home.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { BooksComponent } from '../../components/books/books.component';
import { ArticlesComponent } from '../../components/articles/articles.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomeComponent, FooterComponent, ProjectsComponent, ContactComponent, BooksComponent, ArticlesComponent],
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss'
})
export class RootComponent {

}
