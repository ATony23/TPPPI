// import axios from 'axios';

// const state = {
//     servicesList: []
// };

// const getters = {
//     getServicesList: (state) => state.servicesList
// };

// const actions = {
//     async getServices({ commit }) {
//         axios
//             .get("http://localhost:3000/servicios/mostrarTodos")
//             .then((result) => {
//                 this.services = result.data.Data;
//                 console.log(result.data.Data);
//                 commit('SET_SERVICES', result.data.Data);
//             })
//             .catch((e) => console.log(e));

//     }
// };

// const mutations = {
//     SET_SERVICES(state, ServicesList) {
//         state.servicesList = ServicesList
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