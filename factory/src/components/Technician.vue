<template>
    <div>
        <!-- TODO: Remove this message in production -->
        <p><span id="dev_message">Development message:</span> Technician View</p>

        <div v-if="tools.length > 0">
            <table class="tool-table">
            <thead>
            <tr>
                <th>BIN</th>
                <th>Customer</th>
                <th>Type</th>
                <th>Serial Number</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="item in tools" :key="item.id">
                  <td>{{ item.bin }}</td>
                  <td>{{ item.customer }}</td>
                  <td>{{ item.type }}</td>
                  <td>{{ item.sn }}</td>
              </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>

<script>
    import { getAllTools } from '../services/TechnicianService'

    export default {
    name: 'Technician',
    data() {
        return {
            tools: [],
            numberOfTools: 0
        }
    },
    methods: {
    getAllTools() {
        getAllTools().then(response => {
        this.tools = response
        this.numberOfTools = this.tools.length
    })
    }
    },
    // Automatically loads all tools on page load
    beforeMount(){
        this.getAllTools()
    }
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
#dev_message {
    color: red;
}
.tool-table table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.tool-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
}
.tool-table th, 
.tool-table td {
    padding: 12px 15px;
}
.tool-table tbody tr {
    border-bottom: 1px solid #dddddd;
}
.tool-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}
.tool-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}
.tool-table tbody tr.active-row {
    font-weight: bold;
    color: #009879
}
</style>