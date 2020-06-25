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
        console.log(gNotes)
    }
    return Promise.resolve(gNotes);

}

function addNote(newNote) {
    // switch (type) {
    //     case 'text':
    //         gNotes.push({ type: 'noteText', isPinned: false, info: { txt: info } })
    //         break;
    //     case 'list':
    //         gNotes.push({
    //             type: 'noteTodos', isPinned: false,
    //             info: {
    //                 todos: [{ txt: info.txts[0], isDone: info.checks[0] },
    //                 { txt: info.txts[1], isDone: info.checks[1] }]
    //             }
    //         })
    //         break
    //     case 'img':
    //         console.log(info)
    //         gNotes.push({ type: 'noteImg', isPinned: false, info: { title: info.title, url: info.objImg } })
    //         break
    // }
    console.log(newNote)
    gNotes.push(newNote)
    console.log(gNotes)
    Utils.storeToStorage('notes', gNotes)
}

function deleteNote(idx) {
    console.log(idx)
    gNotes.splice(idx, 1)
    // Utils.storeToStorage('notes', gNotes)

}


var gNotes = [
    {
        type: "noteTodos",
        isPinned: false,
        info: {
            todos: [
                { txt: "clean my room", isDone: false },
                { txt: "throw the garbage", isDone: true }
            ]
        }
    },
    {
        type: "noteTodos",
        isPinned: false,

        info: {
            todos: [
                { txt: "take out the dog", isDone: false },
                { txt: "do home work", isDone: false }
            ]
        }
    },
    {
        type: "noteText",
        isPinned: true,
        info: {
            txt: "hi there!"
        }
    },
    {
        type: "noteImg",
        isPinned: false,
        info: {
            url: "./img/1.png",
            title: "orange monster"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        type: "noteImg",
        isPinned: false,
        info: {
            url: "./img/2.png",
            title: "purple monster"
        },
        style: {
            backgroundColor: "#00d"
        }
    },


]