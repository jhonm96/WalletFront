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

  dataResponse: any|null
  arreglo_enviar:Array<Usuario>=new Array<Usuario>();

  ngOnInit() {}

  onClick() {
    this.auth
      .loginWithGoogle()
      .then((response) => {
        console.log(response);
        this.dataResponse= response
        this.dataResponse.forEach((game: any) =>{
          const obj={
          nombre: game.displayName,
          email: game.email,
          telefono: game.phoneNumber} as Usuario
          this.arreglo_enviar.push(obj);
          console.log(this.arreglo_enviar);
        // this.arreglo_enviar.nombre! = response.user.displayName!;
        //this.arreglo_enviar.email!=response.user.email?.valueOf();
        //  this.arreglo_enviar.id! = response.user.id;
        // this.arreglo_enviar.telefono! = response.user.phoneNumber!.valueOf();     

        //  this.router.navigate(['/home']);
        //  this.user.newUser()
        // this.verificacionTelefono(this.arreglo_enviar);
        
      })

      .catch((error:any) => console.log(error));
  }
  
  // verificacionTelefono(arreglo_enviar: Usuario) {
  //   this.user.verificarUsuarioPost(this.arreglo_enviar).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       // if(res.){
  //       //   //  this.router.navigate(['/home']);
  //       // }
  //       // if(res.){
  //       //   //  this.router.navigate(['/registrarse']);
  //       // }
  //     },
  //   });
  //}
}
