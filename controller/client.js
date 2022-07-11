import Enquiries from "../model/enquiries"
import user from "../model/user";

export const clientFormUpdate=async(req,res)=>{
    try {
        const enq= await new Enquiries({
            ...req.body
        })
        enq.save();
        console.log(enq);
        res.json(enq)
        
    } catch (error) {
        console.log(error);
    }

}

export const getAllQueries=async(req,res)=>{

    const queries =await Enquiries.findOne({counsiler:"none"}).exec()
    console.log(queries);
    res.json(queries)

}


export const claimQueries=async(req,res)=>{
    try {
        const counsiler=await user.findById(req.auth._id)
        // console.log(counsiler);
        const query=await Enquiries.findByIdAndUpdate(req.params.id,{counsiler:counsiler.email},{new:true}).exec()
        // console.log(query);
        res.json({ok:true})
        
    } catch (error) {
        res.status(400).send("Error. Try again");
        
    }
}


export const claimedQuries=async(req,res)=>{
    try {
        const counsiler=await user.findById(req.auth._id)
         console.log(counsiler);
        const query=await Enquiries.find({counsiler:counsiler.email})
         console.log(query);
        res.json(query)
        
    } catch (error) {
        res.status(400).send("Error. Try again");
        
    }

}