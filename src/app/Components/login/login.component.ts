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

  /**Zastavica za prikal loading modala */
  public showLoadingModal: boolean = false;


  /**Zastavica služi za prikaz toast komponente */
  public showToast: boolean = false;

  /**Zastavica animiranja input komponente*/
  public pulseUsername: boolean = false;
  /**Zastavica animiranja input komponente*/
  public pulsePassword: boolean = false;
  public shakeForm: boolean = false;


  public korisnickoIme!: string;
  public lozinka!: string;


  /**Poruka u Toast komponenti */
  public toastMessage: string = "Netočni podaci.";


  constructor(
    private auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.auth.prijavljenKorisnik);

  }


  public prijaviKorisnika() {

    // console.log(this.korisnickoIme);
    // console.log(this.lozinka);

    if (this.provjeriPodatkeZaPrijavu()) {
      this.showLoadingModal = true;


      this.auth.provjeriLoginPodatke(this.korisnickoIme, this.lozinka)
        .then(response => {

          console.log(response);


          if (response.type === UserType.ADMIN) {

            this.showLoadingModal = false;
            console.log("ADMIN");

            this.router.navigate(['/admin'])
              .then(res => {
                console.log(res);

              })
              .catch(err => {
                console.log(err);
              })
              .finally(() => {

              });
          }
          if (response.type === UserType.USER) {
            this.router.navigate(['/user'], {})
              .then(res => {
                console.log(res);

              })
              .catch(err => {
                console.log(err);
              })
              .finally(() => {

              });
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
