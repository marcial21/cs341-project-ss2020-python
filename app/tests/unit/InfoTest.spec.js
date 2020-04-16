import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import Info from '@/views/Info.vue'
import vuetify from 'vuetify'
import VueRouter from 'vue-router'
import Vue from 'vue'



describe('News', () => {
    let wrapper;
    beforeEach(() => { 
        Vue.use(vuetify)
        wrapper = mount(Info, {
            created() {
                this.$vuetify.lang = {
                  t: () => {},
                };
              this.$vuetify.theme = { dark: false };
            }
        });
    });  

  it('check if information renders', () => {

  });

//   test('', () => {

//   });

});