//A interface não diz em nenhum momento quais dados precisam estar em cada 
//uma destas propriedades, e sim o shape, a forma que um objeto deve ter.

export interface Photo {
    id:number;
    postDate:Date;
    url:string;
    description:string;
    allowComments:boolean;
    likes:number;
    comments:number;
    userId:number;     
}