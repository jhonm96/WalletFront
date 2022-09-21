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

  dataResponse: any | null;
  arreglo_enviar: Array<Usuario> = new Array<Usuario>();

  // id!: any;
  // nombre!: any;
  // email!: any;
  // telefono!: any;

  nuevo_arreglo: any;

  ngOnInit() {}

  onClick() {
    this.auth.loginWithGoogle().then((response) => {
      console.log(response.user.displayName);

      this.nuevo_arreglo = {
        nombre: response.user.displayName,
        email: response.user.email,
        telefono: response.user.phoneNumber,
        id: response.user.uid,
      };
      console.log(this.nuevo_arreglo);
      this.verificacionTelefono(this.nuevo_arreglo);

      this.dataResponse = response;
    });
  }
  verificacionTelefono(nuevo_arreglo: Usuario) {
    console.log(nuevo_arreglo)
    this.user.verificarUsuarioPost(nuevo_arreglo).subscribe({
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
// this.dataResponse
//   .forEach((user: any) => {
//     const obj = {
//       nombre: user.displayName,
//       email: user.email,
//       telefono: user.phoneNumber,
//     } as Usuario;
//   })
//   .catch((error: any) => console.log(error));

// this.dataResponse= response
// this.dataResponse.forEach((user: any) =>{
//   const obj={
//   nombre: user.displayName,
//   email: user.email,
//   telefono: user.phoneNumber} as Usuario

// this.arreglo_enviar.push(obj);
// console.log(obj);
// this.arreglo_enviar.nombre! = response.user.displayName!;
//this.arreglo_enviar.email!=response.user.email?.valueOf();
//  this.arreglo_enviar.id! = response.user.id;
// this.arreglo_enviar.telefono! = response.user.phoneNumber!.valueOf();

//  this.router.navigate(['/home']);
//  this.user.newUser()
// this.verificacionTelefono(this.arreglo_enviar);

//
