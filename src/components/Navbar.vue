<template>
  <q-header bordered class="bg-white">
    <q-toolbar>
      <q-avatar>
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
      </q-avatar>

      <q-toolbar-title class="text-bold title">Find Mate</q-toolbar-title>
      <q-btn color="white" label="О Нас" text-color="black" flat no-caps/>
      <q-btn color="white" label="Поддержать" text-color="black" flat no-caps/>
      <q-btn color="white" label="Связаться" text-color="black" flat no-caps/>
      <q-btn color="white" label="Логин" text-color="black" flat no-caps/>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.title{
  color: $secondary;
  text-transform: uppercase;
}
</style>
