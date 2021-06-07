<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-12 col-sm-3">
        <h4 class="text-bold text-primary" style="margin-bottom: 10px">Логин</h4>
        <form @submit.prevent="login">
          <span v-if="errors" class="text-red">Неверный логин или пароль</span>
          <q-input outlined v-model="email" name="email" label="Email" style="margin-top: 10px; margin-bottom: 15px">
            <template v-slot:prepend>
              <q-icon name="account_circle"/>
            </template>
          </q-input>
          <q-input type="password" name="password" outlined v-model="password" label="Пароль"
                   style="margin-bottom: 15px">
            <template v-slot:prepend>
              <q-icon name="lock"/>
            </template>
          </q-input>
          <q-btn push type="submit" color="secondary" style="width: 100%; height: 40px" text-color="white" label="Войти" />
        </form>
        <q-btn icon="vk" color="primary" push style="width: 100%; height: 40px; margin-top: 15px; margin-bottom: 15px"
               text-color="secondary" @click="login">
          <vk style="width: 25px; height: 25px; margin-right: 10px"/>
          <div>Авторизоваться через ВК</div>
        </q-btn>
        <router-link to="/register" class="text-bold text-secondary">Зарегестрироваться -></router-link>
      </div>
    </div>
  </q-page>
</template>

<script>
import axios from 'axios'
import vk from 'src/assets/Vk'

export default {
  name: 'Login',
  data () {
    return {
      email: null,
      password: null,
      token: null,
      errors: null
    }
  },
  components: {
    vk
  },
  methods: {
    login () {
      this.$q.loading.show({
        delay: 400
      })
      axios.post('https://find-mate-kz.herokuapp.com/auth/local', {
        identifier: this.email,
        password: this.password
      }).then(res => {
        this.$q.notify({
          message: 'Вы успешно авторизовались',
          type: 'positive'
        })
        this.$q.loading.hide()
        localStorage.setItem('token', res.data.jwt)
        localStorage.setItem('uid', res.data.user.id)
        this.$store.commit('addToken', res.data.jwt)
        this.$router.push('/')
      }).catch(e => {
        this.$q.loading.hide()
        this.$q.notify({
          message: 'Неверный логин или пароль',
          type: 'negative'
        })
        this.errors = e
      })
    },
    getCities () {
      axios.get('https://find-mate-kz.herokuapp.com/cities', {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }).then(res => console.log(res.data))
    }
  }
}
</script>
