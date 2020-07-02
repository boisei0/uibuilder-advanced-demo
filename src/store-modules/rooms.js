// Initial state
const stateInitial = {
    rooms: [],
};

const getters = {
    getRoomById: (state) => (id) => {
        return state.rooms.find(room => room.id === id);
    },
    nRooms: (state) => {
        return state.rooms.length;
    }
}

const actions = {

}

const mutations = {

}

export default {
    namespaced: true,
    state: stateInitial,
    getters,
    actions,
    mutations,
};