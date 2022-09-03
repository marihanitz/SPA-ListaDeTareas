export class Tarea{
    _id?:string;
    descripcion: string;
    estatus: string;

    constructor(descripcion: string, estatus:string){
        this.descripcion = descripcion;
        this.estatus = estatus;
    }
}