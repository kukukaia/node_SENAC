const getAllTasks = (req,res) => {
    res.send('Todos os items disponíveis')
}
const createTasks = (req,res)=>{
    res.json({id:req.params.id})
}
const updateTask = (req,res)=> {
    res.json({op: 'update',id:req.params.id})
}
const deleteTask = (req,res)=>{
    res.json({op:"delete",id: req.params.id})
}