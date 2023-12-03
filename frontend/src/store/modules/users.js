import axios from 'axios';

const state = {
  user: null,
};

const getters = {
  isAuthenticated: state => !!state.user,
  stateUser: state => state.user,
};

const actions = {
  async register({dispatch}, form) {
    await axios.post('register', form);
    let UserForm = new FormData();
    UserForm.append('username', form.username);
    UserForm.append('password', form.password);
    await dispatch('logIn', UserForm);
  },
  async logIn({dispatch}, user) {
    await axios.post('login', user);
    {
      await dispatch('viewMe'); }
  },
  async viewMe({commit}) {
    let {data} = await axios.get('users/me');
    await commit('setUser', data);
  },
  // eslint-disable-next-line no-empty-pattern
  async deleteUser({}, id) {
    await axios.delete(`user/${id}`);
  },
  async logOut({commit}) {
    await axios.get('logout');
    await commit('logout');
  }
};

const mutations = {
  setUser(state, username) {
    state.user = username;
  },
  logout(state){
    state.user = null;
    document.cookie="Authorization=Bearer";  
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};