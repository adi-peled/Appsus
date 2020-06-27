import { Utils } from "../../main-services/utils.js";

export const noteService = {
    getNotes,
    addNote,
    deleteNote,
    getNoteById,
    updateNote

}

function getNotes() {

    if (!Utils.loadFromStorage('notes')) {
        Utils.storeToStorage('notes', gNotes)
    } else {
        gNotes = Utils.loadFromStorage('notes')
    }
    return Promise.resolve(gNotes);

}


function updateNote(newNote) {
    console.log(newNote)

    var idx = gNotes.findIndex((note) => note.info.id === newNote.info.id)
    gNotes.splice(idx, 1, newNote)
    Utils.storeToStorage('notes', gNotes)
}



function addNote(newNote) {
    console.log(newNote)
    newNote.info.id = Utils.getRandomId()
    newNote.info.isPinned = false
    gNotes.push(newNote)
    Utils.storeToStorage('notes', gNotes)
}

function deleteNote(idx) {
    gNotes.splice(idx, 1)
    Utils.storeToStorage('notes', gNotes)
}

function getNoteById(id) {
    var editNote = gNotes.find((note) => note.info.id === id)
    return Promise.resolve(editNote);

}


var gNotes = [
    {
        type: "noteTodos",
        info: {
            id: Utils.getRandomId(),
            isPinned: false,
            todos: [
                { txt: "clean my room", isDone: false },
                { txt: "throw the garbage", isDone: true }
            ]
        }
    },
    {
        type: "noteTodos",
        info: {
            id: Utils.getRandomId(),
            isPinned: false,
            todos: [
                { txt: "take out the dog", isDone: false },
                { txt: "do home work", isDone: false }
            ]
        }
    },
    {
        type: "noteText",
        info: {
            id: Utils.getRandomId(),
            isPinned: true,
            txt: "hi there!"
        }
    },
    {
        type: "noteImg",

        info: {
            id: Utils.getRandomId(),
            isPinned: false,
            url: "./img/1.png",
            title: "orange monster",
            style: {
                backgroundColor: "#565"
            }
        }

    },
    {
        type: "noteImg",
        info: {
            id: Utils.getRandomId(),
            isPinned: true,
            url: "./img/2.png",
            title: "purple monster",
            style: {
                backgroundColor: "#00d"
            }
        },

    },


]