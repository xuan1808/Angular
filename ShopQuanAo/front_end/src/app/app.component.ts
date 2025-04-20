import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HearderComponent } from "./components/hearder/hearder.component";
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HearderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Sửa đúng cú pháp
})
export class AppComponent {
  title = 'asm';
}
