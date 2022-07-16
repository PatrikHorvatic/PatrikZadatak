import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserType } from 'src/app/Enums/user-type';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public showLoadingModal: boolean = false;
  public showToast: boolean = false;

  public pulseUsername: boolean = false;
  public pulsePassword: boolean = false;
  public shakeForm: boolean = false;


  public korisnickoIme!: string;
  public lozinka!: string;

  public toastMessage: string = "Netočni podaci.";


  constructor(
    private auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }


  public prijaviKorisnika() {

    // console.log(this.korisnickoIme);
    // console.log(this.lozinka);

    if (this.provjeriPodatkeZaPrijavu()) {
      this.showLoadingModal = true;

      console.log("Nastavljam prijavu");

      this.auth.provjeriLoginPodatke(this.korisnickoIme, this.lozinka)
        .then(response => {

          if (response.type === UserType.ADMIN) {
            this.router.navigate(['/admin']);
          }
          if (response.type === UserType.USER) {
            this.router.navigate(['/user']);
          }


        })
        .catch(error => {
          console.log("rejectan");
          this.showLoadingModal = false;
          this.showToast = true;
        })
        .finally(() => {

        });


    }







  }



  /**Metoda služi za provjeru unosa varijabli za prijavu.
   * 
   * * Ne prihvaća se prazno korisničko ime.
   * * Ne prihvaća se prazna lozinka.
   * 
  */
  private provjeriPodatkeZaPrijavu() {

    // radi se provjera unosa radi animiranja elemenata
    if (!this.korisnickoIme) {
      this.pulseUsername = true;
    }
    if (!this.lozinka) {
      this.pulsePassword = true;
    }


    if (this.korisnickoIme && this.lozinka) {
      return true;
    } else {
      return false;
    }

  }


}
