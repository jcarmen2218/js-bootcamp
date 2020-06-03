'use strict'

// Read existing notes from localStorage 
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')
    
    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        return []
    }
}

// Save the notes to localStorage
const savedNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove a note from the list
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
    const noteE1 = document.createElement('div')
    const textE1 = document.createElement('a')
    const button = document.createElement('button')
    
    // Setup the remove note button
    button.textContent = 'x'
    noteE1.appendChild(button)
    button.addEventListener('click', () => {
        removeNote(note.id)
        savedNotes(notes)
        renderNotes(notes, filters)
    })

    // Setup the note title text
    if (note.title.length > 0) {
        textE1.textContent = note.title
    } else {
        textE1.textContent = 'Unnamed note'
    }
    textE1.setAttribute('href', `/edit.html#${note.id}`)
    noteE1.appendChild(textE1)

    return noteE1
}

// Sort your notes by one of three ways
const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
            
        })

     } else if (sortBy === 'byCreated') {
         return notes.sort((a, b) => {
             if (a.createdAt > b.createdAt) {
                 return -1
             } else if (a.createdAt < b.createdAt) {
                return 1
             } else {
                return 0
             }
        })
     } else if (sortBy ==='alphabetical') {
        return notes.sort((a,b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if  (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1 
            } else {
                return 0
            }
        })
     } else {
         return notes
     }
}

// Render application notes
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter((note) =>  note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    document.querySelector('#notes').innerHTML =''
    
    filteredNotes.forEach((note) => {
        const noteE1 = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteE1)
    })
}

// Generate the last edited message
const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`
