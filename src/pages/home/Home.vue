<template>
  <div>
    <public-header></public-header>
    <home-container></home-container>
    <public-foot></public-foot>
  </div>
</template>

<script>
  import PublicHeader from 'components/PublicHeader'
  import HomeContainer from 'home/homeComponents/HomeContainer'
  import PublicFoot from 'components/PublicFoot'
  // import FloatingWindow from 'components/FloatingWindow'
  import axios from 'axios'
  import {mapState} from 'vuex'

  export default {
    name: "Home",
    components: {
      PublicHeader,
      HomeContainer,
      PublicFoot
    },
    data() {
      return {
      }
    },
    methods: {

      getEquipmentsData() {
        axios.get('/api/equipments.json').then(this.getEquipmentsDataSucc);
        axios.get('/api/skills.json').then(this.getSkillsDataSucc);
      },
      getEquipmentsDataSucc(response) {
        if (response.status === 200) {
          this.equipmentsList = response.data;
          console.log(this.equipmentsList)
        }
      },
      getSkillsDataSucc(response) {
        if (response.status === 200) {
          this.skillsList = response.data;
          console.log(this.skillsList)
        }
      }
    },
    mounted() {
      this.getEquipmentsData()
    },
    computed: {
      ...mapState(['playerAttack']),
      ...mapState(['playerMoney']),
      ...mapState(['playerExp'])
    }
  }
</script>

<style scoped>

</style>
