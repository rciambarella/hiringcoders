// Existe somente no type script (para tipar dados atributos) - uso similar ao type
// usada com  Class interface Usuario {
interface Usuario{
    nome: string;
    email: string;
    endereco?: string; 
}

function getUser(): Usuario{ // get = retornar
    return {
        nome: 'Vitor Sales',
        email: 'vsales@gmail.com'
    }
}

function setUser(usuario: Usuario){
    //.....
}