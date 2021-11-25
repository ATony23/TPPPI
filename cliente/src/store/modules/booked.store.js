// import axios from 'axios';

// const state = {
//     bookedList: []
// };

// const getters = {
//     getBookedList: (state) => state.bookedList
// };

// const actions = {
//     async getBooked({ commit }) {
//         axios
//             .get("http://localhost:3000/citas/mostrarTodas")
//             .then((result) => {
//                 this.books = result.data.Data;
//                 console.log(result.data.Data);
//                 commit('SET_BOOKED', result.data.Data);
//             })
//             .catch((e) => console.log(e));

//     }
// };

// const mutations = {
//     SET_BOOKED(state, BookedList) {
//         state.bookedList = BookedList
//     }
// };

// export default {
//     namespaced: true,
//     state: {
//         ...state
//     },
//     getters: {
//         ...getters
//     },
//     actions: {
//         ...actions
//     },
//     mutations: {
//         ...mutations
//     }
// }