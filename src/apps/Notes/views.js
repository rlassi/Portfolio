import moment from 'moment'
import { getFilters } from './filters'
import { sortNotes, getNotes } from './notes'
import notesStyles from '../../styles/NotesApp.module.scss'

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')

    // Setup the note title text
    note.title.length > 0 ? textEl.textContent = note.title : textEl.textContent = 'Unnamed note'
    textEl.classList.add(notesStyles.listItemTitle)
    noteEl.appendChild(textEl)

    // Setup the link
    noteEl.setAttribute('href', `./edit#${note.id}`)
    noteEl.classList.add(notesStyles.listItem)
    noteEl.appendChild(generateTimestamp(note))

    return noteEl
}

// Create timestamp

const generateTimestamp = (note) => {
    const statusEl = document.createElement('a')
    statusEl.textContent = `last updated: ${moment(note.updatedAt).fromNow()} // created: ${moment(note.createdAt).format('MMM D, YYYY')}`
    statusEl.setAttribute('href', `./edit#${note.id}`)
    statusEl.classList.add(notesStyles.listItemSubtitle)
    return statusEl
}

// create timestamp for edit window
const generateTimestampEdit = (note) => {
    const statusEl = document.createElement('span')
    statusEl.textContent = `last updated: ${moment(note.updatedAt).fromNow()} // created: ${moment(note.createdAt).format('MMM D, YYYY')}`
    statusEl.classList.add(notesStyles.listItemSubtitle)
    return statusEl
}

// Render application notes

const renderNotes = () => {
    const notesEl = document.querySelector('#notes')
    const filters = getFilters()
    const notes = sortNotes(filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    notesEl.innerHTML = ''

    if (filteredNotes.length > 0) {
        filteredNotes.forEach((note) => {
            const noteEl = generateNoteDOM(note)
            notesEl.appendChild(noteEl)
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No notes to show'
        emptyMessage.classList.add(notesStyles.emptyMessage)
        notesEl.appendChild(emptyMessage)
    }
}

const initializeEditPage = (noteID, props) => {
    const titleEl = document.querySelector('#note-title')
    const bodyEl = document.querySelector('#note-body')
    // const removeEl = document.querySelector('#remove-note')
    // const saveEl = document.querySelector('#save-note')
    // const updatedAtEl = document.createElement('span')

    const notes = getNotes()
    const note = notes.find((note) => note.id === noteID)

    if (!note) {
        props.history.push('/app');
        //location.assign('/index.html')
    }

    titleEl.value = note.title
    bodyEl.value = note.body
}

export { generateTimestampEdit, generateNoteDOM, generateTimestamp, renderNotes, initializeEditPage }