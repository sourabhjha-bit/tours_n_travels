import { Component } from '@angular/core';
import { RouterLink, RouterModule} from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
