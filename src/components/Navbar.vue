<template>
  <q-header bordered class="bg-white">
    <q-toolbar>
      <q-toolbar-title style="text-transform: none;" class="text-bold title q-pa-x-sm-lg">
        <router-link to="/" style="text-decoration: none; color: #0664F6">Find-Mate.kz</router-link>
      </q-toolbar-title>
      <q-btn color="white" label="О Нас" text-color="black" flat no-caps/>
      <q-btn color="white" label="Поддержать" text-color="black" flat no-caps/>
      <q-btn color="white" label="Связаться" text-color="black" flat no-caps/>
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
