<template>
  <div class="content">
    <MainPageHeader/>
    <q-page-container class="container">
      <div class="fit row page-description">
        <div class="col description">
          Frequently Asked Questions
        </div>

      </div>

      <q-separator class="separator"/>

      <div class="fit wrap row container-1">
        <div class="col main-content">
          <q-list class="q-p-xl">
            <q-item class="item">
              <q-btn-dropdown label="What is Sense Score?" class="dropdown" model-value>
                <q-list>
                  <q-item v-close-popup>
                    Odpowiedź 1
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </q-item>
            <q-item class="item">
              <q-btn-dropdown label="Do I have to pay for that game?" class="dropdown" model-value>
                <q-list>
                  <q-item v-close-popup>
                    Odpowiedź 2
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </q-item>
            <q-item class="item">
              <q-btn-dropdown label="How to play the game?" class="dropdown" model-value>
                <q-list>
                  <q-item v-close-popup>
                    Odpowiedź 3
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </q-item>
            <q-item class="item">
              <q-btn-dropdown stretch label="Can I play that game without registration?"
                              class="dropdown"
                              model-value>

                <q-list>
                  <q-item v-close-popup>
                    Odpowiedź 4
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </q-item>
            <q-item class="item">
              <q-btn-dropdown label="What can I do when I'm out of points?" class="dropdown" model-value>
                <q-list>
                  <q-item v-close-popup>
                    Odpowiedź 5
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </q-item>
          </q-list>

        </div>
      </div>
    </q-page-container>
  </div>
</template>

<script>
import MainPageHeader from '@/components/MainPageHeader'

export default {
  name: 'FAQ',
  components: { MainPageHeader }
}
</script>

<style scoped lang="scss">
@import "../quasar.variables";

.page-description {
  margin-top: 1vh;
}

.description {
  font-size: 12vh;
  text-align: center;
  color: $light-blue-14;
  font-family: "News of the World";
}

.separator {
  background-color: $light-blue-14;
  max-width: 80%;
  margin: 0 auto;
}
.main-content {
  max-width: 50%;
  margin: 5vh auto 1vh auto;
}
.dropdown {
  color: $grey-9;
  margin: 1vh auto;
  background-color: $light-blue-14;
  font-family: "News of the World";
  font-size: 3vh;
  word-spacing: 0.3vw;

}
.item {
  white-space: nowrap;
  overflow: hidden;


}

@media(max-width: $phone-max-width) {
  .description {
    font-size: 10vh;
    line-height: 80px;
    margin-bottom: 30px;
  }
  .separator {
    max-width: 90%;
    margin: 0 auto;

  }
  .item{
    padding: 20px 0;
    margin-left: 0;

  }
  .dropdown{

  }


}

</style>
