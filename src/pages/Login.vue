<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-12 col-sm-3">
        <h4 class="text-bold text-primary" style="margin-bottom: 20px">Логин</h4>
        <q-input outlined v-model="email" :dense="dense" label="Email" style="margin-bottom: 15px">
          <template v-slot:prepend>
            <q-icon name="account_circle"/>
          </template>
        </q-input>
        <q-input type="password" outlined v-model="password" :dense="dense" label="Пароль" style="margin-bottom: 15px">
          <template v-slot:prepend>
            <q-icon name="lock"/>
          </template>
        </q-input>
        <q-btn push color="secondary" style="width: 100%; height: 40px" text-color="white" label="Войти" @click="login"/>

        <q-btn icon="vk" color="primary" push style="width: 100%; height: 40px; margin-top: 15px; margin-bottom: 15px" text-color="secondary" @click="login">
          <vk style="width: 25px; height: 25px; margin-right: 10px" />
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
      token: null
    }
  },
  components: {
    vk
  },
  methods: {
    login () {
      axios.post('https://find-mate-kz.herokuapp.com/auth/local', {
        identifier: this.email,
        password: this.password
      }).then(res => {
        this.token = res.data.jwt
        this.getCities()
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
