export const getUsers = (req,res) =>{

    try {
        //buscar os ususarios no banco
        res.status(200).json({message: "Get Users"})
        
    } catch (error) {
        console.log(error);
        res.status(500).join({ message: "Interal Server error = Controller"});
        
    }
}
