<template>
  <div class="hello">
     <form v-on:submit.prevent="getAnimal()">
   <textarea v-model = "animal" name = "animal" type="animal" id = "animal"
   placeholder="Enter your animal here">
  </textarea>
  <button class = "custom-button dark-button"
  type="submit">Get animal</button>
  </form>
    </div>
</template>

<script>
//import axios from 'axios';
 export default 
 {
    name: 'App',
    data: function() {  return { info: '', animal: ''  }  },
    methods:  {
        getAnimal: function()  {
            // axios
            //   .get('http://localhost:8088/animalsapi?animal=' + this.animal)
             //   .then(response => (this.info = response.data),
                this.info={"fur-color": "yellow","population": 51000,"isExtinct":     
                            false,"isDomesticated": true },
                this.$store.dispatch('storeAnimals', this.info)
                //);
        }
    }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
