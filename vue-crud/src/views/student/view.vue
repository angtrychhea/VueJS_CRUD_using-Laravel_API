
import { RouterLink } from 'vue-router';
<template>
    <div class="container">
        <div class="card">
            <div class="card-holder">
                <h1>This is an Student page
                    <RouterLink to="/student/create" class="btn btn-primary float-end">
                        Add student
                    </RouterLink>
                </h1>

            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Email</th>
                            <th>phone</th>
                            <th>Created at</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(student, index) in this.students" :key="index">
                            <td>{{ student.id }}</td>
                            <td>{{ student.name }}</td>
                            <td>{{ student.course }}</td>
                            <td>{{ student.email }}</td>
                            <td>{{ student.phone }}</td>
                            <td>{{ student.created_at }}</td>
                            <td>
                                <RouterLink to="/" class="btn btn-success">
                                    Edit
                                </RouterLink>
                                <button type="button" class="btn btn-danger">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  </template>
  
<script>
import axios from 'axios'

export default {
    name: 'students',
    data(){
        return{
            students: []
        }
    },
    mounted(){
        this.getStudents();
        //console.log('i am here')
    },
    methods: {
        getStudents(){

            axios.get('http://127.0.0.1:8000/api/students').then(response => {
                this.students = response.data.students
                console.log(this.students)
            });
        }
 
    },
}
</script>
  