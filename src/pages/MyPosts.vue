<template>
  <div class="row justify-center q-mt-lg">
    <div class="col-12 col-sm-7 q-px-md">
      <h4 class="text-bold" style="margin-top: 0px; margin-bottom: 0px">Мои посты </h4>
      <q-btn color="secondary" to="/add-post" push no-caps label="Добавить пост" style="margin-top: 20px"/>
      <q-card class="my-card" style="margin-top: 20px">
        <q-card-section style="padding: 20px">
          <h4 style="margin-top: 0px; margin-bottom: 10px; color: #0664F6; font-size: 24px">
            <router-link to="/post" style="color: #0664F6; text-decoration: none">Ищу руммейта</router-link>
          </h4>
          <p>Город: Алматы</p>
          <p>Дата заселения: 12.05.2021</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eaque eum quod. Animi asperiores at, deleniti
            eligendi et impedit minus officia repudiandae voluptatum! Commodi culpa deserunt impedit, libero maxime
            nesciunt!</p>
          <q-btn push color="red" no-caps label="Удалить Пост" class="q-mr-auto"/>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      fixed: false,
      uid: null,
      posts: null
    }
  },
  methods: {
    renderPage () {
      this.uid = localStorage.getItem('uid')
      this.$q.loading.show({
        delay: 400
      })
      axios.get(`https://find-mate-kz.herokuapp.com/posts?users.id=${this.post_id}`)
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
