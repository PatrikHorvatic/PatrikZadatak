import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-user-navigation',
  templateUrl: './user-navigation.component.html',
  styleUrls: ['./user-navigation.component.css']
})
export class UserNavigationComponent implements OnInit {

  constructor(private router: Router, private activeRoute: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit(): void {
  }



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
