const Tarea = require("../models/Tarea");

exports.crearTarea = async (req,res) =>{

    try{

        let tarea;

        tarea = new Tarea(req.body);
        await tarea.save();
        res.send(tarea);


    } catch(error){
        console.log(error);
    }
   
}

exports.obtenerTareas = async (req,res) =>{
    try{
        const tareas = await Tarea.find();
        res.json(tareas);

    } catch(error){
        console.log(error);

    }
}


exports.obtenerTarea = async (req,res) =>{
    try{
        const tarea = await Tarea.findById(req.params.id);
        if(!tarea){
            res.status(404),json({msg: 'No existe el producto'})
        }
        res.json(tarea);

    } catch(error){
        console.log(error);

    }
}


exports.eliminarTarea = async (req,res) =>{
    try{
        const tarea = await Tarea.findById(req.params.id);
        if(!tarea){
            res.status(404),json({msg: 'No existe el producto'})
        }

        await Tarea.findOneAndRemove({_id:req.params.id})
        res.json({msg: 'Producto eliminado con exito'});

    } catch(error){
        console.log(error);

    }
}

exports.actualizarTarea = async(req,res) =>{
    try{

        const {descripcion,estatus} = req.body;
        let tarea = await Tarea.findById(req.params.id);

        if(!tarea){
            res.status(404),json({asg:'no existe'});

        }

        tarea.descripcion = descripcion;
        tarea.estatus = estatus;
        tarea = await Tarea.findOneAndUpdate({_id:req.params.id}, tarea,{new:true});
        res.json(tarea);

    }catch(error){
       console.log(error);
    }
}