import axios from 'axios';
import router from '@/router';

const state = {
  user: JSON.parse(sessionStorage.getItem("USER_INFO")) || null
};

const getters = {
  isAuthenticated: state => !!state.user,
  stateUser: state => state.user
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
    await axios.post('login', user).then(response => {
      // console.log(response)  // 401 code not comes here, use axios interceptor
      if (response.status===200) {
        // console.log('state.user', state.user)
        dispatch('viewMe', true) 
      }
    }).catch(error => {
      console.log(error);
    })
  },
  async viewMe({commit}, login_redirect) {
    let {data} = await axios.get('users/me');
    await commit('setUser', data);
    if (login_redirect===true) router.push("/dashboard")
  },
  // eslint-disable-next-line no-empty-pattern
  async deleteUser({}, id) {
    await axios.delete(`user/${id}`);
  },
  async logOut({commit}) {
    if (state.user) await axios.get('logout')
    commit('logout')
  }
};

const mutations = {
  setUser(state, userdata) {
    state.user = userdata;
    sessionStorage.setItem("USER_INFO", JSON.stringify(userdata))
  },
  logout(state){
    state.user = null;
    document.cookie = "Authorization=Bearer; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    sessionStorage.setItem("USER_INFO", null)
    console.log('logout:', !!state.user, state.user)
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};
