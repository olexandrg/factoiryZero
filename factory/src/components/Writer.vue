<template>
    <div>
        <p>Technical Writer View</p>
        <div class="number">
            {{numberOfUsers}}
        </div>
        <div class="btn">
            <button @click='getAllUsers()' type="button" class="btn btn-warning">Get all Users</button>
        </div>
        <div v-if="users.length > 0">
            {{users[0].firstName}}
        </div>
    </div>
</template>

<script>
    //TODO: develop a WriterService'
    import { getAllUsers } from '../services/UserService'

    export default {
    name: 'Writer',
    data() {
        return {
            users: [],
            numberOfUsers: 0
        }
    },
    methods: {
    getAllUsers() {
        getAllUsers().then(response => {
        this.users = response
        this.numberOfUsers = this.users.length
    })
    }
    },
    };
</script>

// Style
<style>
nav {
    background-color: #fefae0;
    margin-bottom: 30px;
    border-bottom: 1px solid black;
    display: grid;
    justify-content: center;
}
a {
    font-weight: bold;
    color: #2c3e50;
}
router-link {
    padding: 5px;
}
router-link:hover {
    color: gray;
    cursor:pointer;
}
img {
  align-items: flex-start;
}
</style>