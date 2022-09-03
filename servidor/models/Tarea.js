const mongoose = require('mongoose');


const TareaSchema = mongoose.Schema({
descripcion:{
    type:String,
    required:true
},
estatus:{
    type:String,
    required:true
}
});


module.exports = mongoose.model('Tarea', TareaSchema);