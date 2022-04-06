
<template>
  <div id="app">
    <h1>Communication App</h1>
    <div class="container">
      <LoadModal v-if="isModalOpen"   />
    <div class="flex">

      <!-- Input Fields -->
      <span class="p-float-label">
          <InputText
            class="project-name input-field"
            name="projectName"
            v-model="obj.project_name"
            type="text"
          />
          <label for="projectName">Project Name</label>
        </span>

        <span class="p-float-label">
          <InputText
            class="originator-email input-field"
            name="originatorEmail"
            v-model="obj.originator_email"
            type="text"
          />
          <label for="originatorEmail">Originator Email</label>
        </span>

        <span class="p-float-label">
          <InputText
            class="database-name input-field"
            name="databaseName"
            v-model="obj.database_name"
            type="text"
          />
          <label for="databaseName">Database Name</label>
        </span>

        <span class="p-float-label">
          <InputText
            class="sql-statement input-field"
            name="sqlStatement"
            v-model="obj.sql_body"
            type="text"
          />
          <label for="sqlStatement">SQL Statement</label>
        </span>

        </div>

        <span class="p-float-label sms-container">
          <InputText
            class="sms-body input-field"
            name="smsBody"
            v-model="obj.sms_body"
            type="text"
            maxlength="164"
          />
          <label for="smsBody">SMS Body</label>
        </span>

        <div class="email-body">
          <h5>Email Body</h5>
          <Editor class="email-input" v-model="obj.email_body" editorStyle="height: 320px" />
        </div>

        <!-- Button Container -->
        <div class="btn-container">
          <Button label="LOAD" class="p-button-lg p-button-raised btn p-button-secondary" @click="toggleModal" />
          <Button label="SAVE" class="p-button-lg p-button-raised btn p-button-primary" @click="saveData"/>
          <Button label="RUN" class="p-button-lg p-button-raised btn p-button-success" @click="postData"/>
        </div>
    
  </div>
  </div>
</template>

<script>
import LoadModal from './components/LoadModal.vue'
import axios from 'axios'
export default {
    data() {
        return {
          // object for data from inputs
            obj: {
              project_name : '',
              originator_email : '',
              database_name : '',
              sms_body : '',
              email_body : '',
              sql_body : '',
            },
            isModalOpen: true
        }
    },
    methods: {
      // Saves Data and Downloads Data to File on Local PC
        saveData(){
         const blob = new Blob([JSON.stringify(this.obj, null, 2)], {type : 'application/json'})
          const href = URL.createObjectURL(blob)
          
          const a = Object.assign(document.createElement("a"),{
            href,
            style: "display: none",
            download: `${this.obj.project_name}.json`
          })
          document.body.appendChild(a)
          a.click()
          URL.revokeObjectURL(href)
          a.remove()
          this.clearInputFileds()
        },
        // Loads data from JSON File
        loadData(){
          const jsonFileData = require('./sample.json')
          this.obj.project_name = jsonFileData.project_name
          this.obj.originator_email = jsonFileData.originator_email
          this.obj.database_name = jsonFileData.database_name
          this.obj.sms_body = jsonFileData.sms_body
          this.obj.email_body = jsonFileData.email_body
          this.obj.sql_body = jsonFileData.sql_statement
        },
        // Clears Inputs,used in multple functions
        clearInputFileds(){
          this.obj.project_name = ''
          this.obj.originator_email = ''
          this.obj.database_name = ''
          this.obj.sms_body = ''
          this.obj.email_body = ''
          this.obj.sql_body = ''
        },
        toggleModal(){
          this.isModalOpen = !this.isModalOpen
        },
        postData(){
          axios.post('https://jsonplaceholder.typicode.com/posts',
            JSON.stringify({
              title: 'foo',
              body: 'bar',
              userId: 1,
            })
          ).then(resp => {
            console.log(resp)
          })
        }
    },
    components:{
      LoadModal
    }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
  .flex{
    display: flex;
    justify-content: space-between;
  }
.container{
  width: 70%;
  margin: 3rem auto 0 auto;
}
h1{
  background-color: #5286EC;
  color: white;
  text-align: center;
  margin-top: -0.4rem;
  font-size: 3rem;
}
.input-field{
  width: 17rem;
  padding: 1.4rem;
  border-radius: 20px;
}
.sms-container{
  width: 100%;
  margin-top: 4rem;
  
}
.sms-body{
  width: 100%;
  height: 5rem;
  margin: 0 auto;
}
.btn-container{
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
}
.btn{
  border-radius: 15px;
}
</style>
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
