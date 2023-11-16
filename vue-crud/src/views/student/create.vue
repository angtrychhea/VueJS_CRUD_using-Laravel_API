<template>
    <div class="container mt-5">
      <div class="card">
        <div class="card-header">
          <h4>Add students</h4>
        </div>
        <div class="card-body">
          <ul class="alert alert-warning" v-if="Object.keys(errorList).length > 0">
            <li class="mb-0 ms-3" v-for="(errors, field) in errorList" :key="field">
              {{ field }}: {{ errors[0] }}
            </li>
          </ul>
  
          <div class="mb-3">
            <label for="">Name</label>
            <input type="text" v-model="model.student.name" class="form-control">
          </div>
          <div class="mb-3">
            <label for="">Course</label>
            <input type="text" v-model="model.student.course" class="form-control">
          </div>
          <div class="mb-3">
            <label for="">Email</label>
            <input type="text" v-model="model.student.email" class="form-control">
          </div>
          <div class="mb-3">
            <label for="">Phone number</label>
            <input type="text" v-model="model.student.phone" class="form-control">
          </div>
          <div class="mb-3">
            <button type="submit" @click="createStudent" class="btn btn-primary">Create</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'studentcreate',
    data() {
      return {
        errorList: {},
        model: {
          student: {
            name: '',
            course: '',
            email: '',
            phone: '',
          },
        },
      };
    },
    methods: {
      createStudent() {
        const mythis = this;
        axios.post('http://127.0.0.1:8000/api/students', this.model.student)
          .then((res) => {
            console.log(res.data);
            alert(res.data.message);
  
            this.model.student = {
              name: '',
              course: '',
              email: '',
              phone: '',
            };
          })
          .catch((error) => {
            if (error.response && error.response.status === 422) {
              if (error.response.data && error.response.data.errors) {
                mythis.errorList = error.response.data.errors;
              }
            } else {
              console.error('Error:', error.message);
              // Provide a user-friendly error message to the user
            }
          });
      },
    },
  };
  </script>
  