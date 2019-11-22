import React, { useEffect } from 'react';

import BackToFolio from './BackToFolio';

import { initializeEditPage, generateTimestampEdit } from '../apps/Notes/views'
import { updateNote, removeNote, saveNotes, getNotes } from '../apps/Notes/notes'

import notesStyles from '../styles/NotesApp.module.scss';

const NotesAppEdit = (props) => {

    useEffect(() => {
        const titleEl = document.querySelector('#note-title')
        const bodyEl = document.querySelector('#note-body')
        const removeEl = document.querySelector('#remove-note')
        const saveEl = document.querySelector('#save-note')
        const noteID = window.location.hash.substr(1);
        console.log(noteID)
        //const noteID = location.hash.substring(1) *****

        let note = updateNote(noteID, {})

        const printStatus = () => {
            document.getElementById('notes').innerHTML = ''
            document.getElementById('notes').appendChild(generateTimestampEdit(note));
        }

        printStatus()
        initializeEditPage(noteID)


        titleEl.addEventListener('input', (e) => {
            note = updateNote(noteID, {
                title: e.target.value
            })
            printStatus()
        })

        bodyEl.addEventListener('input', (e) => {
            note = updateNote(noteID, {
                body: e.target.value
            })
            printStatus()
        })

        removeEl.addEventListener('click', (e) => {
            removeNote(noteID)
            props.history.push('/notes-app/app');
            // location.assign('/index.html')
        })

        saveEl.addEventListener('click', (e) => {
            saveNotes()
            props.history.push('/notes-app/app');
            // location.assign('/index.html')
        })

        window.addEventListener('storage', (e) => {
            if (e.key === 'notes') {
                getNotes()
                initializeEditPage(noteID, props)
            }
        })
    });

    return (
        <div className={notesStyles.container}>
            <header className={notesStyles.header}>
                <div className={notesStyles.contentContainer}>
                    <h1 className={notesStyles.headerTitle}>Notes App</h1>
                    <h2 className={notesStyles.headerSubtitle}>Take notes!</h2>
                </div>
            </header>
            <div className={notesStyles.actions}>
                <div className={`${notesStyles.actionsContainer} ${notesStyles.actionsContainerSpaced}`}>
                    <div id="notes">
                    </div>
                </div>
            </div>
            <form>
                <div className={notesStyles.contentContainer}>
                    <input id="note-title" placeholder="Note Title" className={notesStyles.titleInput} />
                    <textarea id="note-body" className={notesStyles.bodyInput} placeholder="Enter note text"></textarea>
                    <button id="save-note" className={notesStyles.button}>Save Note</button>
                    <button id="remove-note" className={`${notesStyles.button} ${notesStyles.buttonSecondary}`}>Remove Note</button>
                </div>
            </form>
            <BackToFolio readmeLink="https://github.com/rlassi/Notes-App/blob/master/README.md" />
        </div>
        
    );
};

export default NotesAppEdit;