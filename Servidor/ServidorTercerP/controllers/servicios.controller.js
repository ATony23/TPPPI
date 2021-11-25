const Services = require('../models/Services');

async function mostrarTodos(req, res) {

   try {
      let servicios = await Services.find();

      return res.status(200).json({ "Success": true, "Data": servicios });
   } catch (err) {
      console.log('Error al buscar')
   }
}

async function agregar(req, res) {

   const { title, description, manager } = req.body;

   if (!title || !description || !manager) return res.status(404).json({ "Success": false, "Message": "Missing Variables" });

   try {

      let agregarServicio = new Services(req.body);
      await agregarServicio.save();

      if (res.statusCode != 200) {
         return res.json({ "Status": "Algo salió mal" });

      } else {
         return res.json({ "Success": true, "Message": "Servicio guardado" });
      }

   } catch (err) {

   }
}

async function eliminar(req, res) {

   const { id } = req.params;

   if (!id) return res.status(404).json({ "Success": false, "Message": "Missing Variables" });

   try {

      await Services.findByIdAndRemove(id);

      if (res.statusCode != 200) {
         return res.json({ "Status": "Algo salió mal" });

      } else {
         return res.json({ "Success": true, "Message": "Servicio eliminado" });
      }

   } catch (err) {

   }
}

async function modificar(req, res) {

   const { id } = req.params;
   const { title, description, manager } = req.body;

   if (!id || !title || !description || !manager) return res.status(404).json({ "Success": false, "Message": "Missing Variables" });

   try {

      await Services.findByIdAndUpdate(id, req.body);

      if (res.statusCode != 200) {
         return res.json({ "Status": "Algo salió mal" });

      } else {
         return res.json({ "Success": true, "Message": "Servicio editado" });
      }

   } catch (err) {

   }
}

module.exports = {
   mostrarTodos,
   agregar,
   eliminar,
   modificar
}