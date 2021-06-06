<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-12 col-sm-6">
        <h4 class="text-bold text-primary" style="margin-bottom: 20px; margin-top: 10px;">Добавить Пост</h4>
        <q-input outlined v-model="email" label="Заголовок Поста" style="margin-bottom: 15px" />
        <p class="text-bold" style="font-size: 20px">Описание: </p>
        <q-editor
          style="margin-bottom: 20px"
          v-model="password"
          min-height="5rem"
          :toolbar="[
        [
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            options: ['left', 'center', 'right', 'justify']
          }
        ],
        ['bold', 'italic', 'strike', 'underline'],
        ['hr'],
        ['fullscreen'],
        [
          {
            label: $q.lang.editor.formatting,
            icon: $q.iconSet.editor.formatting,
            list: 'no-icons',
            options: [
              'p',
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'code'
            ]
          },
          {
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          }]]"
        />
        <p class="text-bold" style="font-size: 20px">Способ связи с вами: </p>
        <q-input type="textarea" outlined v-model="email" placeholder="Телефон: 8 747 89*****" style="margin-bottom: 15px" />
        <q-btn push color="secondary" style="width: 100%; height: 50px; margin-bottom: 15px" text-color="white"
               label="Добавить Пост"/>
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
