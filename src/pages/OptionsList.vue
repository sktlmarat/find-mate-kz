<template>
    <div class="row justify-center q-mt-lg">
      <div class="col-12 col-sm-7">
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
        <q-card class="my-card">
          <q-card-section>
            <p>Ищу руммейта</p>
            <p>На подселение</p>
            <p>Не пью не курю</p>
            <q-btn label="Подробнее"/>
          </q-card-section>
        </q-card>
      </div>
    </div>
</template>
