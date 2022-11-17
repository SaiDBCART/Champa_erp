
export interface login{
    username: string;
   password:string
}

export interface logindata{
    flag:1;
    message:String;
    data:Array<logindata>;
}