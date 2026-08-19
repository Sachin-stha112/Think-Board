import Note from "../../models/Note.js";

export async function getAllNotes (req,res)
{
    try
    {
        const notes = await Note.find({user: req.user._id}).sort({createdAt: -1})
        res.status(200).json(notes)
    }
    catch(error)
    {   
        console.error("Error in getAllNotes Controller. ", error);
        res.status(500).json({message: "Internal Server failure"})
    }
}
export async function getNoteById(req,res)
{
    try {
        const note = await Note.findOne({_id: req.params.id, user: req.user._id})
        if(!note) return res.status(404).json({message: "Note not found"});
        res.json(note);
    } catch (error) {
        console.error("Error in getNoteById Controller. ", error);
        res.status(500).json({message: "Internal Server failure"})
    }
}

export async function createNote(req, res)
{
    try {
        const {title,content} = req.body
        const newNote = new Note({title,content, user: req.user._id});
        await newNote.save();
        res.status(201).json(newNote);
    } catch (error) {

        console.error("Error in createNote Controller. ", error);
        res.status(500).json({message: "Internal Server failure"})
    }
    
}
export async function updateNote(req, res)
{
    try {
        const {title,content} = req.body
        const updatedNote = await Note.findOneAndUpdate(
            {_id: req.params.id, user: req.user._id},
            {title,content},
            {new: true}
        );
        if (!updatedNote) return res.status(404).json({message: "Note not found"})
        res.status(200).json(updatedNote);
        
    } catch (error) {
        console.error("Error in updateNote Controller. ", error);
        res.status(500).json({message: "Internal Server failure"})
    }
}
export async function deleteNote(req, res)
{
    try {
        const deletedNote = await Note.findOneAndDelete({_id: req.params.id, user: req.user._id})
        if(!deletedNote) return res.status(404).json({message: "Note not found"})
        res.status(200).json({message: "Note Deleted Successfully"});
    } catch (error) {
        console.error("Error in DeleteNote Controller. ", error);
        res.status(500).json({message: "Internal Server failure"})
    }
}
