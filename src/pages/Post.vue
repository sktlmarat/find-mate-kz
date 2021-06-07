<template>
  <div class="row justify-center q-mt-lg">
    <div class="col-12 col-sm-7 q-px-md">

      <q-card class="my-card" style="margin-top: 20px">
        <q-card-section style="padding: 20px">
          <h4 style="margin-top: 0px; margin-bottom: 10px; color: #0664F6; font-size: 24px">{{ post.title }}</h4>
          <p>Город: {{ post.city }}</p>
          <p v-html="post.description"></p>
          <q-btn @click="fixed=true" icon="contact_page" push style="height: 50px" color="primary"
                 text-color="secondary" label="Узнать контакты" class="q-mr-auto"/>
        </q-card-section>
      </q-card>

    </div>
    <q-dialog v-model="fixed">
      <q-card>
        <q-card-section>
          <div class="text-h6 text-secondary text-bold">Контактные Данные</div>
        </q-card-section>

        <q-separator/>

        <q-card-section style="max-height: 50vh" class="scroll">
          <p>{{ post.contact_info }}</p>
        </q-card-section>

        <q-separator/>

        <q-card-actions align="right">
          <q-btn flat label="Закрыть" color="secondary" v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      fixed: false,
      post_id: this.$route.params.id,
      post: null
    }
  },
  methods: {
    renderPage () {
      this.$q.loading.show({
        delay: 400
      })
      axios.get(`https://find-mate-kz.herokuapp.com/posts/${this.post_id}`)
        .then(res => {
          this.$q.loading.hide()
          this.post = res.data
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
