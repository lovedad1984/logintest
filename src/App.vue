<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        app
    >
        <div>
          <router-link to="/">Home</router-link>
        </div>
        <div>
          <router-link v-if="isLogin === false"  to="/login">Login</router-link>
        </div>
      <div>
        <router-link v-if="isLogin === true" to="/mypage">마이페이지</router-link>
      </div>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-menu offset-y v-if="isLogin">
          <template v-slot:activator="{ on }">
            <v-btn
                color="primary"
                dark
                v-on="on"
                text
                icon
            >
              <v-icon>more_vert</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title router :to="{name: 'mypage'}">마이페이지</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$store.dispatch('logout')">
              <v-list-item-title>로그아웃</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn text v-else router :to="{name: 'login'}">Log In</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <!--  -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import {mapState} from 'vuex';
export default {
  data: () => ({
    drawer: null
  }),
  computed: {
    ...mapState(['isLogin'])
  },
  props: {
    source: String
  }
}
</script>