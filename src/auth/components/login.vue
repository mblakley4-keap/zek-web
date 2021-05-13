<template>
    <div class="login-container">
        <div class="login-fields">
            <h2>Enter your login credentials</h2>
            <div class="login-input">
                <label class="login-label" for="username">User Name</label>
                <input type="text" id="username" v-model="loginInfo.username">
            </div>

            <div class="login-input">
                <label class="login-label" for="password">Password</label>
                <input type="password" id="password" v-model="loginInfo.password">
            </div>
            <button class="submit-button" v-bind:class="{ clickable: isClickable }" @click="submitLogin">Submit</button>

        </div>
  </div>
</template>

<script>
import * as api from '../api/auth'; 

export default {
    data() {
        return {
            loginInfo: {
                username: '',
                password: ''
            },
            isClickable: true // implement check for inputs
        };
    },

    methods: {
        submitLogin() {
            api.userLogin(this.loginInfo);
        }
    },

    // watch: {
    //     username
    // }

};
</script>

<style>
    .login-container {
        margin: 0 auto;
        width: 35%;
    }

    .login-fields {
        margin: 5em auto;
        text-align: left;
    }

    .login-input {
        display: block;
        width: 50%;
        margin: 15px 0;
    }

    .login-label {
        display: block;
    }

    input[type=text] {
        padding: 8px 12px;
        font-size: 1em;
    }
    
    input[type=password] {
        padding: 8px 12px;
        font-size: 1em;
    }

    .submit-button {
        padding: 0.8em 1.6em;
        margin: 0.5em 0;
        border-radius: 2em;
        text-decoration: none;
        box-sizing: border-box;
        font-weight: 600;
        font-size: 1em;
        text-align: center;
        background-color: blue;
        border: none;
        color: white;
    }

    .clickable:hover {
        cursor: pointer;
    }

</style>