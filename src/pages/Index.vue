<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-12 col-sm-7">
        <h4 class=" text-bold">Найдите <span class="text-secondary">сожителя</span> по одному клику 😃</h4>
        <q-select
          @input="findCity"
          :options="options"
          outlined
          v-model="text"
          use-input
          transition-show="jump-up"
          transition-hide="jump-up"
          @filter="filterFn"
          clearable
          label="Название города">
          <template v-slot:before>
            <q-icon name="place"/>
          </template>

          <template v-slot:append>
            <q-icon name="search"/>
          </template>
        </q-select>

        <q-separator style="margin-top: 30px"/>
        <Cities/>
      </div>
    </div>
  </q-page>
</template>

<script>
import Cities from 'components/PopularCities'

const stringOptions = ['Astana', 'Almaty', 'Semey', 'Aktau', 'Atyrau']
export default {
  name: 'PageIndex',
  components: {
    Cities
  },
  data () {
    return {
      text: null,
      options: stringOptions
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
    }
  }
}
</script>
