// ///booking add data

// const authareadata = (req, res)=>{
    
    

    //     let areapostCreate = new areaModel({
        
        //         areaName: req.body.areaName, 
        //         imageURL: req.body.imageURL,
//         userEmail: req.body.userEmail,
//         hotelname: req.body.hotelname,


//     })
    
//     areapostCreate.save()
//     .then((response)=>{
    //         console.log(`response success`)
    
//         res.status(200).send({result: response, Message: "Area Data Successfully"})

//         console.log(areapostCreate)

//     }).catch((err)=>{
    //         res.status(400).send({result: err, Message: "Area Data Not Successfully"})
    //     })
    
    // }
    
    
// //getsingleuserid

// const getareaid = async(req, res)=>{
//     try {
//         console.log(req.params);
//         const {id} = req.params;

//         const userindividual = await areaModel.findById({_id:id});
//         console.log(userindividual);
//         res.status(201).json(userindividual)

//     } catch (error) {
//         res.status(422).json(error);
//     }
// }


// // delete cat
// const deletearea = async(req,res)=>{
//     try {
//         const {id} = req.params;

//         const deleteareauser = await areaModel.findByIdAndDelete({_id:id})
//         console.log(deleteareauser);
//         res.status(201).json(deleteareauser);

//     } catch (error) {
    //         res.status(422).json(error);
    //     }
    // }



// // // update user data

// const areaupdate = async(req,res)=>{
    //     try {
//         const {id} = req.params;

//         const updateduserarea = await areaModel.findByIdAndUpdate(id,req.body,{
    //             new:true
//         });

//         console.log(updateduserarea);
//         res.status(201).json(updateduserarea);

//     } catch (error) {
    //         res.status(422).json(error);
//     }
// }



// //get all area data

// const getallarea = async(req, res)=>{
//     const allgetarea = await areaModel.find();
//     res.json(allgetarea);

// }



// module.exports = {authareadata, getallarea, getareaid, deletearea, areaupdate}



///booking add data
const areaModel  = require('../Model/areaSchema');

const authareadata = (req, res)=>{
    
    
    
    let categorypostCreate = new areaModel({

        categoryName: req.body.categoryName, 
        imageURL: req.body.imageURL,
        userEmail: req.body.userEmail,
        hotelname: req.body.hotelname,


    })
    
    categorypostCreate.save()
    .then((response)=>{
        console.log(`response success`)

        res.status(200).send({result: response, Message: "Category Data Successfully"})

        console.log(categorypostCreate)

    }).catch((err)=>{
        res.status(400).send({result: err, Message: "Category Data Not Successfully"})
    })

}


//getsingleuserid

const getareaid = async(req, res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await areaModel.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
}


// delete cat
const deletearea = async(req,res)=>{
    try {
        const {id} = req.params;

        const deletsignupuser = await areaModel.findByIdAndDelete({_id:id})
        console.log(deletsignupuser);
        res.status(201).json(deletsignupuser);

    } catch (error) {
        res.status(422).json(error);
    }
}



// update user data

const areaupdate = async(req,res)=>{
    try {
        const {id} = req.params;

        const updateduser = await areaModel.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
}


//get all category data

const getallarea = async(req, res)=>{
    const allgetcategory = await areaModel.find();
    res.json(allgetcategory);

}



module.exports = {authareadata, getallarea, getareaid, deletearea, areaupdate}
