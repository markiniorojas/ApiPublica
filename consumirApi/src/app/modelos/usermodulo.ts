// Solo para GetAll (respuesta de /films)
export interface UserModel {
    id: number;
    name: string;
    username: string;
    email: string;
    address: string;
    
  }
  
  // Para GetById (respuesta de /films/{id})
  export interface UserCreate {
    id: number;
    name: string;
    username: string;
    email: string;
  }