<template>
  <q-header elevated class="bg-light-blue-14">
    <q-toolbar style="gap: 20px">
      <q-toolbar-title>
        <img
          alt="App logo"
          src="@/assets/logo.png"
          @click="$router.push({ path: '/home' })"
          style="cursor: pointer"
          class="logo-image"
        />
      </q-toolbar-title>

      <div>
        <p
            class="text-weight-bold"
            icon-right="people"
            color="grey-9"
            flat
            no-caps
        >
          Saldo:
        </p>
        <p>{{ balance.balance }}<em>SD</em></p>
      </div>
      <div>
        <p
            class="text-weight-bold"
            icon-right="people"
            color="grey-9"
            flat
            no-caps
        >
          Logged as
        </p>
        <p>{{ username }}</p>
      </div>

      <q-btn
          label="Log out"
          color="grey-9"
          text-color="light-blue-14"
          class="text-weight-bold"
          style="letter-spacing: 0.1vh"
          @click="logOut"
      >
      </q-btn>
    </q-toolbar>
  </q-header>
</template>

<script>
import { ref } from 'vue'
import { setAuthToken } from '@/services/sessionProps'
import axiosR from "../services/api";
const bearer = localStorage.getItem('bearer')
const user = localStorage.getItem('user')

export default {
  name: 'home-page-header',
  setup () {
    return {
      value: ref(true),
    }
  },
  data () {
    return {
      balance: '',
      username: user,
    }
  },
  mounted() {
    axiosR
      .request({
        method: "get",
        baseURL: "api/Betting/balance",
        headers: {
          Authorization: "Bearer " + bearer,
        },
      })
      .then((response) => {
        this.balance = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },

  methods: {
    async logOut () {
      let token = localStorage.getItem('bearer')

      let headers = { Authorization: "Bearer " + token };
      await axiosR.delete("api/Account/logout", { headers });
      setAuthToken(null);
      localStorage.removeItem("bearer");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("refreshToken");
      await this.$gAuth.signOut();
      //console.log("isAuthorized", this.Vue3GoogleOauth.isAuthorized);
      localStorage.removeItem('user')
      localStorage.removeItem('googleID')
      await this.$router.go()
      //window.location.reload(true)
    },
  },
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&family=Ubuntu&display=swap");

.q-item,
q.input,
q.list,
p,
.q-tab,
.q-btn,
.q-toolbar {
  font-family: "Mochiy Pop One", sans-serif;
  font-family: "Ubuntu", sans-serif;
}
</style>
