export interface Outfit{
     id?: string
     name: string
     description: string
     price: string
     category_id: string
     product_image_url:string
}
    
    
export interface UserInterface {
     id?: number;
     email: string;
     phone: string;
     password: string;
     token?: string;
}

export interface Login {
     email: string;     
     password: string;
     JWT: string;
}

export interface AuthUser{
     email:string
     password:string
}

export interface LoginUser{
     email:string;
     role:string;
     token:string
}