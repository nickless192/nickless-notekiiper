const fs = require("fs");
const path = require("path");

function createNote(body, notesArray) {
    // assigning body to new note variable
    const note = body;
    const id = notesArray.length + 1;

    note.id = id;

    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({db : notesArray}, null, 2)
    );
    return note;

};

function deleteNote(id, notesArray) {
    // remove the element at position id-1 because JS starts at 0 but our ids at 1
    notesArray.splice(id-1,1);

    // after deleting, assign new ids
    notesArray.forEach(note => {
        note.id = notesArray.indexOf(note) + 1;
    })

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({db : notesArray}, null, 2)
    );

    return id;


}

module.exports = {createNote, deleteNote};