<template>
  <q-header bordered class="bg-white">
    <q-toolbar>
      <q-toolbar-title v-if="$q.screen.gt.sm" style="text-transform: none;" class="text-bold title q-pa-x-sm-lg">
        <router-link to="/" style="text-decoration: none; color: #0664F6">Find-Mate.kz</router-link>
      </q-toolbar-title>
      <q-btn color="white" to="/add-post" label="Добавить Пост" text-color="black" flat no-caps/>
      <q-btn color="white" to="/contact" label="Связаться с нами" text-color="black" flat no-caps/>
      <q-btn color="white" v-if="$store.state.token" to="/my-posts" label="Мои посты" text-color="black" flat no-caps/>
      <q-btn color="white" v-if="!$store.state.token" to="/login" label="Логин" text-color="secondary" class="text-bold" flat no-caps/>
      <q-btn color="white" v-if="$store.state.token" @click="logout" label="Выйти" text-color="secondary" class="text-bold" flat no-caps/>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$router.push('/')
      this.$store.commit('logout')
      this.$q.notify({
        message: 'Вы успешно вышли с аккаунта',
        type: 'positive'
      })
    }
  },
  created () {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token')
      this.$store.commit('addToken', this.token)
    }
  }
}
</script>

<style lang="scss">
.title{
  color: $secondary;
  text-transform: uppercase;
}
</style>
