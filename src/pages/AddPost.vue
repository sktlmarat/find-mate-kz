<template>
  <q-page padding>
    <div class="row justify-center" v-if="$store.state.token">
      <div class="col-12 col-sm-5">
        <h4 class="text-bold text-primary" style="margin-bottom: 20px; margin-top: 10px;">Добавить Пост</h4>
        <q-input outlined v-model="title" label="Заголовок Поста" style="margin-bottom: 15px"/>
        <q-select
          :options="options"
          outlined
          v-model="city"
          use-input
          transition-show="jump-up"
          transition-hide="jump-up"
          @filter="filterFn"
          style="margin-bottom: 15px"
          clearable
          label="Выберите город">
        </q-select>
        <p class="text-bold" style="font-size: 20px">Описание: </p>
        <q-editor
          style="margin-bottom: 20px"
          v-model="description"
          min-height="10rem"
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
        ['unordered', 'ordered'],
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
        <q-input type="textarea" outlined v-model="contact" placeholder="Телефон: 8 747 89*****"
                 style="margin-bottom: 15px"/>
        <q-btn @click="addPost" push color="secondary" style="width: 100%; height: 50px; margin-bottom: 15px" text-color="white"
               label="Добавить Пост"/>
      </div>
    </div>
    <div class="row justify-center" v-else>
      <div class="col-12 col-sm-5">
        <p class="text-bold" style="font-size: 20px">Вы должны авторизоваться чтобы добавлять посты</p>
        <router-link to="/login" class="text-secondary text-bold" style="font-size: 20px">Авторизоваться ->
        </router-link>
      </div>
    </div>
  </q-page>
</template>

<script>
import axios from 'axios'

const stringOptions = ['Нур-Султан', 'Алматы', 'Шымкент', 'Караганда', 'Актау', 'Атырау', 'Актобе', 'Семей', 'Усть-Каменогорск', 'Тараз', 'Костанай', ' Кызылорда', 'Павлодар', 'Петропавловск']

export default {
  name: 'Add Post',
  data () {
    return {
      title: null,
      description: null,
      city: null,
      contact: null,
      error: null,
      options: stringOptions,
      uid: null,
      token: null
    }
  },
  methods: {
    addPost () {
      this.uid = localStorage.getItem('uid')
      this.token = localStorage.getItem('token')
      if (this.uid && this.token) {
        axios.post('https://find-mate-kz.herokuapp.com/posts', {
          title: this.title,
          description: this.description,
          contact_info: this.contact,
          city: this.city,
          users: this.uid
        }, {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        }).then(res => {
          this.$q.notify({
            message: 'Вы успешно добавили пост',
            type: 'positive'
          })
          this.$q.loading.hide()
          this.$router.push('/my-posts')
        }).catch(e => {
          this.$q.loading.hide()
          this.$q.notify({
            message: 'Ошибка при добавлений. Попробуйте еще раз',
            type: 'negative'
          })
          this.error = e
        })
      }
    },
    filterFn (val, update, abort) {
      update(() => {
        const needle = val.toLowerCase()
        // eslint-disable-next-line no-undef
        this.options = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    }
  }
}
</script>
