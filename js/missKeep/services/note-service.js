import { Utils } from "../../main-services/utils.js";

export const noteService = {
    getNotes,
    addNote,
    deleteNote,
    getNoteById,
    updateNote,
    updatePinned

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

    var idx = gNotes.findIndex((note) => note.info.id === newNote.info.id)
    gNotes.splice(idx, 1, newNote)
    Utils.storeToStorage('notes', gNotes)
}


function updatePinned(info) {
    var idx = gNotes.findIndex((note) => note.info.id === info.id)
    var note = gNotes.find((note) => note.info.id === info.id)
    gNotes.splice(idx, 1, note)
    console.log(note)
    Utils.storeToStorage('notes', gNotes)
}


function addNote(newNote) {
    newNote.info.id = Utils.getRandomId()
    newNote.info.isPinned = false
    if (newNote.type === "noteVideo") {
        newNote.info.url = newNote.info.url.replace('watch?v=', 'embed/')
    }
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
        type: "noteVideo",
        info: {
            id: Utils.getRandomId(),
            isPinned: false,
            url: "https://www.youtube.com./embed/09R8_2nJtjg",
            title: "video here",
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