<template>
  <div class="row justify-center q-mt-lg">
    <div class="col-12 col-sm-7 q-px-md">
      <q-select
        @input="findCity"
        :options="$store.state.cities"
        outlined
        v-model="text"
        use-input
        transition-show="jump-up"
        transition-hide="jump-up"
        @filter="filterFn"
        clearable
        label="Название города">

        <template v-slot:append>
          <q-icon name="search"/>
        </template>
      </q-select>
      <q-btn color="secondary" to="/add-post" push no-caps label="Добавить пост" style="margin-top: 20px"/>

      <q-card class="my-card" v-for="(post,index) in posts" :key="index" style="margin-top: 20px">
        <q-card-section style="padding: 20px">
          <h4 style="margin-top: 0px; margin-bottom: 10px; color: #0664F6; font-size: 24px">
            <router-link :to="'/post/' + post.id" style="color: #0664F6; text-decoration: none">{{ post.title }}</router-link>
          </h4>
          <p>Город: {{ post.city }}</p>
          <p v-html="post.description"></p>
          <q-btn :to="'/post/' + post.id" flat color="secondary" no-caps label="Подробнее ->" class="q-mr-auto"/>
        </q-card-section>
      </q-card>

    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PageIndex',
  data () {
    return {
      city: this.$route.params.city,
      search: null,
      posts: null
    }
  },
  methods: {
    filterFn (val, update, abort) {
      update(() => {
        const needle = val.toLowerCase()
        // eslint-disable-next-line no-undef
        this.options = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    },
    findCity (val) {
      this.$router.push('search')
    },
    renderPage () {
      this.$q.loading.show({
        delay: 400
      })
      axios.get(`https://find-mate-kz.herokuapp.com/posts?city=${this.city}`)
        .then(res => {
          this.$q.loading.hide()
          this.posts = res.data
        }).catch(e => {
          this.$q.loading.hide()
        })
    }
  },
  mounted () {
    this.renderPage()
  }
}
</script>
