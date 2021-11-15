<template>
    <div>
        <!-- TODO: Remove this message in production -->
        <p><span id="dev_message">Development message:</span> Engineer View</p>
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
    //TODO: develop a EngineerService'
    import { getAllUsers } from '../services/UserService'

    export default {
    name: 'Engineer',
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

</style>