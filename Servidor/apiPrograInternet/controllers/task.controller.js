const Services = require('../models/task.model.js')

/**
 * This function retrieve all pokemons info
 * @param {*} req 
 * @param {*} res 
 */
async function taskList(req, res) {

    const { status } = req.body;
    var service;

    try {

        status ? service = await Services.find({ status: status }) : await Services.find({});

        if (!service) return res.status(200).json({ "success": true, "message": "Error while 'finding'", "data": [] });

        return res.status(200).json({ "success": true, "data": service });

    } catch (err) {
        console.log(err);
        return res.status(500).json({ "success": false, "message": "Error while 'finding'" });
    }
}

async function newTask(req, res) {

    const name = req.body.name;

    if (!name) return res.status(404).json({ "success": false, "message": "Variable name is required" });

    try {
        const newService = await new Services({
            id: "1",
            name: name,
            status: "NEW"
        }).save();

        if (!newService) return res.status(500).json({ "success": false, "message": "Error while 'saving'", "code": 1 });

        return res.status(200).json({ "success": true, newService });

    } catch (err) {
        console.log(err);
        return res.status(500).json({ "success": false, "message": "Error while 'saving'", "code": 2 });
    }
}

async function updateTask(req, res) {

    const { taskId, newTaskName } = req.body;

    if (!taskId, !newTaskName) return res.status(404).json({ "success": false, "message": "Variable name is required" });

    try {
        const update = await Services.updateOne({
            id: taskId
        }, {
            $set: {
                name: newTaskName
            }
        });

        if (!update) return res.status(500).json({ "success": true, "message": "Error while 'update'" });

        return res.status(200).json({ "success": true, "new data": { "task id": taskId, "new task name": newTaskName } });

    } catch (err) {
        return res.status(500).json({ "success": false, "message": "Error while 'update'" });
    }
}

async function deleteTask(req, res) {

    const { taskName } = req.body;

    if (!taskName) return res.status(404).json({ "success": false, "message": "Variable name is required" });

    try {

        const exists = await Services.find({ name: taskName });

        if (!exists) return res.status(404).json({ "success": false, "message": "Error while 'finding'" });
        if (exists.length == 0) return res.status(404).json({ "success": false, "message": "Task does´not exists" });

        const taskDelete = await Services.deleteOne({
            name: taskName
        });

        if (!taskDelete) return res.status(500).json({ "success": true, "message": "Error while 'delete'" });

        return res.status(200).json({ "success": true, "Deleted": taskName });

    } catch (err) {
        return res.status(500).json({ "success": false, "message": "Error while 'delete'" });
    }
}

module.exports = {
    taskList,
    newTask,
    updateTask,
    deleteTask
}