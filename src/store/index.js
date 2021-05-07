import Vue from 'vue';
import Vuex from 'vuex';
import router from '../routes/index';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userInfo: null,
        allUsers: [
            { id: 1, name: 'bong', email: 'bong@naver.com', password:'1234'},
            { id: 2, name: 'song', email: 'song@naver.com', password:'1234'},
        ],
        isLogin: false,
        isLoginError: false
    },
    mutations: {
        // 로그인이 성공했을 때
        loginSuccess(state, payload) {
            state.isLogin = true;
            state.isLoginError = false;
            state.userInfo = payload;
        },
        // 로그인이 실패했을 때
        loginError(state) {
            state.isLogin = false;
            state.isLoginError = true;
        },
        logout(state) {
            state.isLogin = false;
            state.isLoginError = false;
            state.userInfo = null;
        }
    },
    actions: {
        // 로그인을 시도
        login({state, commit}, loginObj) {
            // 전체유저 에서 해당 이메일로 유저를 찾는다.
            let selectedUser = null;
            state.allUsers.forEach(user => {
              if(user.email === loginObj.email) selectedUser = user
            });
            if (selectedUser === null || selectedUser.password !== loginObj.password) {
                commit('loginError')
            } else {
                commit('loginSuccess', selectedUser);
                router.push({name: 'mypage'})
            }
            // 그 유저의 비밀번호와 입력 된 비밀번호를 비교한다.
        },
        logout({commit}) {
            commit('logout')
            router.push({name: 'home'})
        }
    }
})