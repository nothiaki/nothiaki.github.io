import { Component } from '@angular/core';
import { Book } from '../../types/Book';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent {
  books: Book[] = [
    {
      title: "Entendendo Algoritmos",
      author: "Aditya Y. Bhargava",
      reference: "https://www.amazon.com.br/Entendendo-Algoritmos-Ilustrado-Programadores-Curiosos/dp/8575225634/ref=sr_1_1?crid=36CN3TG2H5FCO&dib=eyJ2IjoiMSJ9.2bcGWnm39oy1cLyMccaaYvGetXLzklT3uhHg1TDOEA9Z5L4SjIeiBfGsPWwkqI13q0eN1zahL2CmKUZTrp4BP3cxMXbee58IM0L6G91FopUC7agxsjm-OHb_ClY_mn_zWokpug7RvH_jugU-WnuCsExE9ACWlaYm59nioFwgPwtlUS5am-bGgIQWS8xcSSkVQcaIorPBe3wCVZW6qsDb7LRKr9aEC-Lw2eSQaN9hSWklWCdPR_oSslcNrM4e9W6BtUy-J-1ZjrVRTis8ggSW7DM5uqfGPk8tzmhSdA7iQ3c.NkIT-V8j3cJ-zACsE5UyilbitMrNievbuHk8phFJ944&dib_tag=se&keywords=entendendo+algoritmos&qid=1709074677&sprefix=entende%2Caps%2C268&sr=8-1"
    },
    {
      title: "O Fazedor de Velhos",
      author: "Rodrigo Lacerda",
      reference: "https://www.amazon.com.br/fazedor-velhos-Rodrigo-Lacerda/dp/8535928421/ref=sr_1_1?crid=2IUHIAUR4PV89&dib=eyJ2IjoiMSJ9.10xM8_F8NoPUZJELRs0wVBgLG5hzHltOXZnNPuMWBx6mczmn3PAAV1XapAV1tauHrpOnQYlTg3LwC1hpcWjS6XN99iilEKKhcTU1pX_Uh2RKHxjp6aVRhMYgvj9BVz4K_LY0FxIweeZ7-vKryPsgWWfq4Bv14oX2m86mYg84fIJKVfChrG3joi_VLkf2TWys2iUztW9CYtKTWLOHvT4ndmnmCS--3_Y54LDXrdf9_jWpvj6O3hrGUD9JcC8bO9mAFrhqCZRYwDc_gQF2hrVEaRh0Os1iAVDt7PdJidgi5pk.A6Uu2vazBDTePtwsHpp-7OOvGTjmUugHfg1mDmRjYjQ&dib_tag=se&keywords=o+fazedor+de+velhos&qid=1709074549&sprefix=o+faze%2Caps%2C472&sr=8-1"
    },
    {
      title: "A Revolução dos Bichos",
      author: "George Orwell",
      reference: "https://www.amazon.com.br/revolu%C3%A7%C3%A3o-dos-bichos-conto-fadas/dp/8535909559"
    }
  ];
}
