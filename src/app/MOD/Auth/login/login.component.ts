import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { TokenService } from '../../../CORE/services/token.service';
import { RoleService } from '../../../CORE/services/role.service';
import { AuthService } from '../../../CORE/services/auth.service';
import { IAuthRes } from '../../../CORE/interfaces/IAuthRes';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './login.component.html',

})
export default class LoginComponent {
  private tkService = inject(TokenService);
  private roleService = inject(RoleService);
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router,  private toastr: ToastrService) { }

  login(): void {
    const userData = { email: this.email, password: this.password };
    this.authService.loginUser(userData).subscribe(
      {
        next:(res:IAuthRes)=>{
          localStorage.setItem('userId', res.data.userId.toString());
          this.roleService.setRole(res.data.role);
          this.tkService.setToken(res.data.token);
          this.router.navigate(['/']);
          this.showsuccess();
        },
        error: (err) =>{
          this.showerror()
          console.log(err)
        }
      }
    );
  }



  showsuccess() {
    this.toastr.success('Login sucessfully.', 'Success');
  }

  showerror() {
    this.toastr.error('Invalid Credentials', 'Error');
  }
}
