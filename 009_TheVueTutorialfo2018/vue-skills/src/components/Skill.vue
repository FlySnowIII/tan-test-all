<template>
  <div class="hello">
    <!-- Skill {{skillObj.msg}} -->
    <!-- <button v-on:click="changeName" v-bind:disabled="skillObj.btnState">Change Name</button> -->
    
    <!-- Skill {{msg}} -->
    <!-- <button v-on:click="changeName" v-bind:disabled="btnState">Change Name</button> -->

    <div class="holder">
        <ul>
            <li v-for="(data, index) in skills" :key="index">{{index}}. {{data.skill}}</li>
        </ul>
    </div>
    <p v-if="skills.length >0">
      You have more than 1 skills
    </p>
    <p v-else>
      You have less than or equal to 1 skill
    </p>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  // props: {
  //   skillObj: Object
  // },
  // data(){
  //   return {
  //     msg:"Hello World",
  //     btnState:true
  //   }
  // },
  data(){
    return {
      skills:[
        {skill:"Vue.js"},
        {skill:"Frontend Developer"},
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Skills.css" scoped>

</style>
