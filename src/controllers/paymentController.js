export const getPayments = (req,res) =>{

    try {
        //buscar os Pagamentos no banco
        res.status(200).json({message: "Get Payments"})
        
    } catch (error) {
        console.log(error);
        res.status(500).join({ message: "Interal Server error = Payments"});
        
    }
}
