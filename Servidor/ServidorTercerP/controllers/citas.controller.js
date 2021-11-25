const Cita = require('../models/Citas');

async function mostrarTodas(req, res) {

   try {
      let citas = await Cita.find();
      console.log('Citas encontradas: ', citas);

      return res.status(200).json({ "Success": true, "Data": citas });
   } catch (err) {
      console.log('Error al buscar')
   }
}

async function agregar(req, res) {

   const { title, description, date, time, applicant } = req.body;

   if (!title || !description || !date || !time || !applicant) return res.status(404).json({ "Success": false, "Message": "Missing Variables" });

   try {

      let agregarCita = new Cita(req.body);
      await agregarCita.save();

      if (res.statusCode != 200) {
         return res.json({ "Status": "Algo salió mal" });

      } else {
         return res.json({ "Success": true, "Message": "Cita guardada" });
      }

   } catch (err) {

   }
}

async function eliminar(req, res) {

   const { id } = req.params;

   if (!id) return res.status(404).json({ "Success": false, "Message": "Missing Variables" });

   try {

      await Cita.findByIdAndRemove(id);

      if (res.statusCode != 200) {
         return res.json({ "Status": "Algo salió mal" });

      } else {
         return res.json({ "Success": true, "Message": "Cita eliminada" });
      }

   } catch (err) {

   }
}

async function modificar(req, res) {

   const { id } = req.params;
   const { title, description, date, time, applicant } = req.body;

   if (!id || !title || !description || !date || !time || !applicant) return res.status(404).json({ "Success": false, "Message": "Missing Variables" });

   try {

      await Cita.findByIdAndUpdate(id, req.body);

      if (res.statusCode != 200) {
         return res.json({ "Status": "Algo salió mal" });

      } else {
         return res.json({ "Success": true, "Message": "Cita editada" });
      }

   } catch (err) {

   }
}

module.exports = {
   mostrarTodas,
   agregar,
   eliminar,
   modificar
}