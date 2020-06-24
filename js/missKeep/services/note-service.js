export const noteService = {
    getNotes,
    addNote
}

function getNotes() {

    return gNotes
}



function addNote(info, type) {
    console.log(type)
    switch (type) {
        case 'text':
            console.log(info)

            gNotes.push({ type: 'noteText', isPinned: false, info: { txt: info } })
            break;
        case 'list':


            gNotes.push({
                type: 'noteTodos', isPinned: false,

                info: {

                    // todos: [{ txt: info.txt1, isDone: info.check1 },
                    // { txt: info.txt2, isDone: info.check2 }]
                }
            })
            break
        case 'img':
            console.log(info)
            gNotes.push({ type: 'noteImg', isPinned: false, info: { title: info.title, url: info.objImg } })
            break
    }


}




var gNotes = [
    {
        type: "noteTodos",
        info: {
            todos: [
                { txt: "clean my room", isDone: false },
                { txt: "throw the garbage", isDone: true }
            ]
        }
    },
    {
        type: "noteTodos",
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
        info: {
            url: "./img/1.png",
            title: "orange monster"
        },
        style: {
            backgroundColor: "#00d"
        }
    },


]