export interface IUsersRes {
  success: boolean;
  data: IJefe[];
}

interface IJefe {
  id: number;
  email: string;
  password: string;//
  role: string;
  projectid: number;
  nombres: string;
  apellidos: string;
  dni: string;//
  created_at: string;//
  updated_at: string;//
}


export interface IAllUsersRes{
 success:boolean,
 data:IAllUsers[]
}
export interface IAllUsers{
  id:string,
  email:string,
  role:string,
  projectid:string,
  projectname:string,
  nombres:string,
  apellidos:string,
  dni:string
}

export interface IChangeRoleRes{
  success:boolean,
  message:string,
  data:IAllUsers
 }

 export interface IResRandom{
  success: boolean;
  message: string;
 }