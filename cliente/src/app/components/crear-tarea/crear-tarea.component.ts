import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Tarea} from 'src/app/models/tarea';
import { ToastrService } from 'ngx-toastr';
import {TareaService} from 'src/app/services/tarea.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.css'],
})
export class CrearTareaComponent implements OnInit {

  listTareas : Tarea[] = [];
  tareaForm: FormGroup;
  titulo = 'Añadir nueva tarea';
  id : any;
  


  constructor(private fb: FormBuilder,private aRouter:ActivatedRoute, private toastr: ToastrService, private _tareaService: TareaService) {
    this.tareaForm = this.fb.group({
      tarea:['',Validators.required]
    })

    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.obtenerTareas();
  }


  actualizarTarea(id:any){
    this.id = id;
    if(this.id!=null){
      this.titulo = 'Editar tarea';
      this._tareaService.getTarea(id).subscribe(data =>{
        this.tareaForm.setValue({
          tarea:data.descripcion,
        })
      }, error =>{
        console.log(error);
      });
     
    }

  }


  obtenerTareas(){

    this._tareaService.getTareas().subscribe(data => {
      this.listTareas = data;
    }, error =>{
      console.log(error)
    });

  }

  eliminarTarea(id:any){

    this._tareaService.deleteTarea(id).subscribe(data =>{
      this.toastr.error('La tarea se ha eliminado exitosamente', 'Eliminada');
      window. location. reload(); 
    }, error =>{
      console.log(error);
    });

  }

  agregarTarea(){

    if(this.tareaForm.status=='VALID'){
      const TAREA: Tarea = {
        descripcion: this.tareaForm.get('tarea')?.value,
        estatus: "pendiente",
      }
      
      if(this.id!=null) {
        this._tareaService.putTarea(this.id,TAREA).subscribe(data =>{
          this.toastr.success('El producto se actualizó correctamente', 'Actualización');
          this.tareaForm.reset();
          window. location. reload();
        },error =>{
          console.log(error);
        })
      } else {
          this._tareaService.postTarea(TAREA).subscribe(data =>{
            this.toastr.success('Se añadió una nueva tarea', '¡Hecho!');
            window. location. reload(); 
          }, error =>{
            console.log(error);
          });
        }

    }

  }

}
