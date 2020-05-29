<template>
<div>
<p>Animal name: {{stateAnimal.animal}}</p>
<p>Fur color: {{stateAnimal.furColor}}</p>
<p>Population: {{stateAnimal.population}}</p>
<p>Is extinct: {{stateAnimal.isExtinct}}</p>
<p>Is domesticated: {{stateAnimal.isDomesticated}}</p>
 </div>
</template>
<script>
 import {mapState, mapGetters} from 'vuex';
export default {
computed:{  ...mapState({ stateAnimal:state => state.stateAnimal }),   
 },
}
</script>