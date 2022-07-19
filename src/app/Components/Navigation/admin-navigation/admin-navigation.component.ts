import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.css']
})
export class AdminNavigationComponent implements OnInit {

  constructor(private router: Router, private activeRoute: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit(): void {
  }


  /**Poziva se klikom na gumb odjave */
  userLogout() {
    this.authService.odjaviKorisnika()
      .then(resp => {
        console.log("Uspješan logout");
        this.router.navigate(['/prijava']);
      })
      .catch(err => {

      })
      .finally(() => {

      });
  }
}
