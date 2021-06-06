<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-12 col-sm-7">
        <h4 class="text-bold text-primary" style="margin-bottom: 20px">Мои Посты</h4>
      </div>
    </div>
  </q-page>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      email: null,
      password: null,
      token: null
    }
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
