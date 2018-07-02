
import menu from '../../api/MainMenu'

// initial state
const state = {
    all: [],
    current: null,
}

// getters
const getters = {
    allItems: state => state.all,
    currentItem: (state,getters) => {
        if (!state.current) state.current = getters.allItems[0];
        return state.current;
    }
}

// actions
const actions = {
    getAllItems ({ commit }) {
        menu.getItems(items => {
            commit('setItems', items)
        })
    }
}

// mutations
const mutations = {
    setItems (state, items) {
        state.all = items
    },

    clearCount (state, { name }) {
        menu.clearCount(name);
        // store.dispatch('getAllItem');
    },
    setCurrentItem(state,{ path }) {
        const item = state.all.find(item => item.url == path)
        if (item) {
            state.current = item;
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
