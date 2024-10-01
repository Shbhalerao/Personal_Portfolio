const Resume = require('../models/resumeModel');
const mongoose = require('mongoose');


//get the title
const getTitles = async(req, res) => {
    const titles = await Resume.find({}).sort({createdAt: -1})
    res.status(200).json(titles);
}

//Get title by id
const getTitleById = async(req, res) => {
    const{ id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Invalid Id'});
    }
    const title = await Resume.findById(id);
    if(!title){
        return res.status(404).json({error: 'No Such Title'});
    }

    res.status(200).json(title);
}


//Post a title_schema
const createTitle = async(req, res) => {
    const{name, job_title, contact_no, email_id, 
        github, website, created_by, is_active} = req.body;

        try{
            const resume = await Resume.create({name, job_title, contact_no, email_id, 
                github, website, created_by, is_active});
            res.status(200).json(resume);
        }catch(error){
            res.status(400).json({error : error.message});
        }
}

//delete details from resume
const deleteTitle = async(req, res) => {
    const{ id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Invalid Id'});
    }

    const title = await Resume.findOneAndDelete({_id: id});
    if(!title){
        return res.status(404).json({error: 'No Such Title'});
    }

    res.status(200).json(title);
}


//update something in resume
const updateTitle = async(req, res) => {
    const{ id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Invalid Id'});
    }

    const title = await Resume.findOneAndUpdate({ _id : id},{
        ...req.body 
    });

    if(!title){
        return res.status(404).json({error: 'No Such Title'});
    }

    res.status(200).json(title);
}



module.exports = {
    createTitle,
    getTitles,
    getTitleById,
    deleteTitle,
    updateTitle
}