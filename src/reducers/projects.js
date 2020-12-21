import db from '../db.json';

function projectReducer(state = db, action) {
    switch (action.type) {
        case 'FETCH_PROJECTS':
            return { ...state, projects: db };

        default:
            return state;
    }
}

export default projectReducer;
