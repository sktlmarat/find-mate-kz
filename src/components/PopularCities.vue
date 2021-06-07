<template>
  <div>
    <h4 class="text-bold" style="margin-top: 30px; margin-bottom: 30px">Популярные Города 🏢</h4>
    <div class="row q-col-gutter-lg">
      <div class="col-6 col-md-4">
        <router-link to="/search">
          <q-img class="city-image" ratio="1"
                 src="https://liter.kz/wp-content/uploads/2021/01/5ec0f209dd858233169489.jpg">
            <div class="absolute-full text-bold flex flex-center" style="font-size: 24px">
              Алматы
            </div>
          </q-img>
        </router-link>
      </div>
      <div class="col-6 col-md-4">
        <router-link to="/search">
          <q-img class="city-image" ratio="1" src="https://cf.bstatic.com/data/xphoto/1182x887/332/33289263.jpg?size=S">
            <div class="absolute-full text-bold flex flex-center" style="font-size: 24px">
              Нур-Султан
            </div>
          </q-img>
        </router-link>
      </div>
      <div class="col">
        <router-link to="/search">
          <q-img class="city-image" ratio="1" src="https://liter.kz/wp-content/uploads/2019/11/4-8-750x500.jpg">
            <div class="absolute-full text-bold flex flex-center" style="font-size: 24px">
              Шымкент
            </div>
          </q-img>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.city-image {
  box-shadow: 1px 1px 5px #1D1D1D;
  border-radius: 10px;
}

.city-image:hover {
  transform: translateY(-5px);
  transition: all .3s;
  box-shadow: 0px 10px 10px #1D1D1D;
}
</style>
