export interface IAuthRes{
    data:IData,
    message:string,
    success:boolean
}

interface IData{
    role:string,
    token:string,
    userId:number
}