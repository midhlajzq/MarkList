    // import model
const students= require('../model/studentSchema')
// add student
exports.addstudent =async(req,res)=>{
    const student=new students({
        no:req.body.no,
        name:req.body.name,
        mark:req.body.mark
    })
    try{
      
      
        
        await student.save()
        res.status(200).json('student added')
      
  
}
catch(error){
res.status(401).json(error)
}
}


// getallstudents
exports.getallstudents = async(req,res)=>{
    // logic

    try{
        const allStudents = await students.find()
        res.status(200).json(allStudents)
    }
    catch(error){
        res.status(401).json(error)
    }
}

// view student
exports.viewstudent = async(req,res)=>{
    const {id}=req.params

    try{
        const student =await students.findOne({_id:req.params.id})
        if(student){
            res.status(200).json(student)
        }
        else{
            res.status(401).json('student not found')
        }
        
    }
    catch(error){
        res.status(401).json(error)
    }
}
// update student 
exports.updatestudent=async (req,res)=>{
    try{
        const id=req.params.id
        const student =await students.findByIdAndUpdate(id,req.body);
        if(!student){
          return  res.status(401).json('cannot find any student')
        }
           res.status(200).json('updatedStudent')
    }
    catch(error){
        res.status(400).json(error)
    }
}
// 
exports.remove=async (req,res)=>{
    // get id from request
   

    // remove
    try{    
        const student=await students.deleteOne({_id:req.params.id})
        if(student){
            // get all wishlist item after removing particular item
            const allStudents= await students.find()
            res.status(200).json(allStudents)

        }
        else{
            res.status(401).json('student not found in your list')
        }

    }
    catch(error){
        res.status(401).json(error)
    }
}