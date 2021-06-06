<template>
    <div class="row justify-center q-mt-lg">
      <div class="col-12 col-sm-7 q-px-md">

        <q-card class="my-card" style="margin-top: 20px" >
          <q-card-section style="padding: 20px">
            <h4 style="margin-top: 0px; margin-bottom: 10px; color: #0664F6; font-size: 24px">Ищу руммейта</h4>
            <p>Город: Алматы</p>
            <p>Дата заселения: 12.05.2021</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eaque eum quod. Animi asperiores at, deleniti eligendi et impedit minus officia repudiandae voluptatum! Commodi culpa deserunt impedit, libero maxime nesciunt!</p>
            <q-btn @click="fixed=true" icon="contact_page" push style="height: 50px" color="primary" text-color="secondary" label="Узнать контакты" class="q-mr-auto"/>
          </q-card-section>
        </q-card>

      </div>
      <q-dialog v-model="fixed">
        <q-card>
          <q-card-section>
            <div class="text-h6 text-secondary text-bold" >Контактные Данные</div>
          </q-card-section>

          <q-separator />

          <q-card-section style="max-height: 50vh" class="scroll">
            <p>Номер Телефона: 87589063635</p>
            <p>Telegram: t.me/flskdf</p>
          </q-card-section>

          <q-separator />

          <q-card-actions align="right">
            <q-btn flat label="Закрыть" color="secondary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
</template>
<script>
export default {
  data () {
    return {
      fixed: false
    }
  }
}
</script>
