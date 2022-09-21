import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Usuario } from '../models/Usuario.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-Login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
    private user: UserService
  ) {}

  arreglo_enviar!: Usuario;

  ngOnInit() {}

  onClick() {
    this.auth
      .loginWithGoogle()
      .then((response) => {
        console.log(response);

        this.arreglo_enviar.nombre! = response.user.displayName!;
        this.arreglo_enviar.email! = response.user.email!;
        // this.arreglo_enviar.id! = response.user.id;
        this.arreglo_enviar.telefono! = response.user.phoneNumber!;

        //  this.router.navigate(['/home']);
        //  this.user.newUser()
        this.verificacionTelefono(this.arreglo_enviar);
      })

      .catch((error) => console.log(error));
  }
  verificacionTelefono(arreglo_enviar: Usuario) {
    this.user.verificarUsuarioPost(this.arreglo_enviar).subscribe({
      next: (res) => {
        console.log(res);
        // if(res.){
        //   //  this.router.navigate(['/home']);
        // }
        // if(res.){
        //   //  this.router.navigate(['/registrarse']);

        // }
      },
    });
  }
}
