<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 100%">
      <q-tabs v-model="tab" no-caps class="shadow-2">
        <q-route-tab label="Your events" to="/home" exact />
        <q-route-tab label="All events" to="/all-events" exact />
        <q-route-tab label="Favourites" to="/add-favourites" exact />
        <q-route-tab label="Coupons" to="/coupons" exact />
        <q-route-tab label="Ranks" to="/ranks" exact />
      </q-tabs>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "routing-tabs",
  setup() {
    return {
      value: ref(true),
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&family=Ubuntu&display=swap");

.q-item,
q.input,
q.list,
p,
.q-tab,
.q-tabs,
.q-btn,
.q-select {
  font-family: "Mochiy Pop One", sans-serif;
  font-family: "Ubuntu", sans-serif;
}

.q-tabs {
  background-color: #4d4d4d;
  color: yellow;
}
::v-deep .q-tab__label {
  font-weight: 700;
  text-transform: uppercase;
}
</style>