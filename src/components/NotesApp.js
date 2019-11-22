import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import BackToFolio from './BackToFolio';

import { createNote, getNotes } from '../apps/Notes/notes';
import { setFilters } from '../apps/Notes/filters';
import { renderNotes } from '../apps/Notes/views';

import notesStyles from '../styles/NotesApp.module.scss';

const NotesApp = (props) => {
    useEffect(() => {
        renderNotes()

        document.querySelector('#create-note').addEventListener('click', (e) => {
            const idCreator = createNote()
            props.history.push(`./edit/#${idCreator}`)
            //location.assign(`/edit.html#${idCreator}`)
        })

        document.querySelector('#search-text').addEventListener('input', (e) => {
            setFilters({
                searchText: e.target.value
            })
            renderNotes()
        })

        document.querySelector('#filter-by').addEventListener('change', (e) => {
            setFilters({
                sortBy: e.target.value
            })
            renderNotes()
        })

        window.addEventListener('storage', (e) => {
            if (e.key === 'notes') {
                getNotes()
                renderNotes()
            }
        })
    })
    return (
        <div className={notesStyles.container}>
            <Helmet>
                <title>rkL | Notes</title>
            </Helmet>
            <header className={notesStyles.header}>
                <div className={notesStyles.contentContainer}>
                    <h1 className={notesStyles.headerTitle}>Notes App</h1>
                    <h2 className={notesStyles.headerSubtitle}>Take notes!</h2>
                </div>
            </header>
            <div className={notesStyles.actions}>
                <div className={notesStyles.actionsContainer}>
                    <input id="search-text" type="text" placeholder="Filter Notes" className={notesStyles.input} />
                        <select id="filter-by" className={notesStyles.dropdown}>
                            <option value="byEdited">Sort by last edited</option>
                            <option value="byCreated">Sort by recently created</option>
                            <option value="alphabetical">Sort alphabetically</option>
                        </select>
                </div>
            </div>
            <div className={notesStyles.contentContainer}>
                <div id="notes">
                </div>
                <button id="create-note" className={notesStyles.button}>Create Note</button>
            </div>
            <BackToFolio readmeLink="https://github.com/rlassi/Notes-App/blob/master/README.md" />
        </div>   
    );
};

export default NotesApp;