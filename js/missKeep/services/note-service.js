import { Utils } from "../../main-services/utils.js";

export const noteService = {
    getNotes,
    addNote,
    deleteNote
}

function getNotes() {

    if (!Utils.loadFromStorage('notes')) {
        Utils.storeToStorage('notes', gNotes)
    } else {
        gNotes = Utils.loadFromStorage('notes')
    }
    return Promise.resolve(gNotes);

}

function addNote(newNote) {
    gNotes.push(newNote)
    Utils.storeToStorage('notes', gNotes)
}

function deleteNote(idx) {
    gNotes.splice(idx, 1)
    Utils.storeToStorage('notes', gNotes)
}

var gNotes = [
    {
        type: "noteTodos",
        info: {
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
            isPinned: true,
            txt: "hi there!"
        }
    },
    {
        type: "noteImg",
        info: {
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
            isPinned: true,
            url: "./img/2.png",
            title: "purple monster",
            style: {
                backgroundColor: "#00d"
            }
        },

    },


]