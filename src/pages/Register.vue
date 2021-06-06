<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-12 col-sm-3">
        <h4 class="text-bold text-primary" style="margin-bottom: 20px">Регистрация</h4>
        <q-input outlined v-model="email" :dense="dense" label="Email" style="margin-bottom: 15px">
          <template v-slot:prepend>
            <q-icon name="account_circle" />
          </template>
        </q-input>
        <q-input type="password" outlined v-model="password" :dense="dense" label="Пароль" style="margin-bottom: 15px">
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>
        <q-input type="password" outlined v-model="password_repeat" :dense="dense" label="Подтвердить Пароль" style="margin-bottom: 15px">
          <template v-slot:prepend>
            <q-icon name="enhanced_encryption" />
          </template>
        </q-input>
        <q-btn push color="secondary" style="width: 100%; height: 40px" text-color="white" label="Регистрация"/>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: null,
      password: null,
      password_repeat: null
    }
  },
  methods: {
    login () {
    }
  }
}
</script>
