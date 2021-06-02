<template>
  <q-page padding>
    <div class="row">
      <div class="col-12">
        <h4>Найдите соседа по одному клику</h4>
        <q-select
          :options="options"
          outlined
          v-model="text"
          use-input
          @filter="filterFn"
          label="Название города">
          <template v-slot:before>
            <q-icon name="flight_takeoff" />
          </template>

          <template v-slot:append>
            <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
            <q-icon name="search" />
          </template>
        </q-select>
        <Cities />
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
    }
  }
}
</script>
