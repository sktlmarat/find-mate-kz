<template>
    <div class="row justify-center q-mt-lg">
      <div class="col-12 col-sm-7 q-px-md">
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

          <template v-slot:append>
            <q-icon name="search"/>
          </template>
        </q-select>
        <q-btn color="secondary" to="/add-post" push no-caps label="Добавить пост" style="margin-top: 20px"/>

        <q-card class="my-card" style="margin-top: 20px" >
          <q-card-section style="padding: 20px">
            <h4 style="margin-top: 0px; margin-bottom: 10px; color: #0664F6; font-size: 24px"><router-link to="/post" style="color: #0664F6; text-decoration: none">Ищу руммейта</router-link></h4>
            <p>Город: Алматы</p>
            <p>Дата заселения: 12.05.2021</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eaque eum quod. Animi asperiores at, deleniti eligendi et impedit minus officia repudiandae voluptatum! Commodi culpa deserunt impedit, libero maxime nesciunt!</p>
            <q-btn to="/post" flat color="secondary" no-caps label="Подробнее ->" class="q-mr-auto"/>
          </q-card-section>
        </q-card>

        <q-card class="my-card" style="margin-top: 20px" >
          <q-card-section style="padding: 20px">
            <h4 style="margin-top: 0px; margin-bottom: 10px; color: #0664F6; font-size: 24px">Ищу руммейта</h4>
            <p>Город: Алматы</p>
            <p>Дата заселения: 12.05.2021</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eaque eum quod. Animi asperiores at, deleniti eligendi et impedit minus officia repudiandae voluptatum! Commodi culpa deserunt impedit, libero maxime nesciunt!</p>
            <q-btn flat color="secondary" no-caps label="Подробнее ->" class="q-mr-auto"/>
          </q-card-section>
        </q-card>

        <q-card class="my-card" style="margin-top: 20px" >
          <q-card-section style="padding: 20px">
            <h4 style="margin-top: 0px; margin-bottom: 10px; color: #0664F6; font-size: 24px">Ищу руммейта</h4>
            <p>Город: Алматы</p>
            <p>Дата заселения: 12.05.2021</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eaque eum quod. Animi asperiores at, deleniti eligendi et impedit minus officia repudiandae voluptatum! Commodi culpa deserunt impedit, libero maxime nesciunt!</p>
            <q-btn flat color="secondary" no-caps label="Подробнее ->" class="q-mr-auto"/>
          </q-card-section>
        </q-card>
      </div>
    </div>
</template>
