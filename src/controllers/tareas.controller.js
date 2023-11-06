

export const listarTareas = (req, res) => res.send('Obteniendo tareas');

export const listarTarea = (req, res) => res.send('Obteniendo tarea unica');

export const crearTarea = (req, res) => res.send('creando tarea');

export const actualizarTarea = (req, res) => req.send('Actualizando tarea unica');

export const eliminarTarea = (req, res) => res.send('Eliminando tarea unica');