<template>
    <div>
        <!-- TODO: Remove this message in production -->
        <p><span id="dev_message">Development message:</span> Engineer View</p>

        <!-- Lists all fault reports currently on the factory floor -->
        <div v-if="reports.length > 0">
            <table class="reports-table">
                <thead>
                    <tr>
                        <th>BIN</th>
                        <th>Fault</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in reports" :key="item.id">
                        <td>{{ item.bin }}</td>
                        <td>{{ item.fault }}</td>
                        <td>{{ item.status }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import { getAllReports } from '../services/EngineerService'

    export default {
    name: 'Engineer',
    data() {
        return {
            reports: [],
            numberOfReports: 0
        }
    },
    methods: {
    getAllReports() {
        getAllReports().then(response => {
        this.reports = response
        this.numberOfReports = this.reports.length
    })
    }
    
    },
    // Automatically loads all fault reports on page load
    beforeMount(){
        this.getAllReports()
    }
    };
</script>

<style>
.reports-table table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.reports-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
}
.reports-table th, 
.reports-table td {
    padding: 12px 15px;
}
.reports-table tbody tr {
    border-bottom: 1px solid #dddddd;
}
.reports-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}
.reports-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}
.reports-table tbody tr.active-row {
    font-weight: bold;
    color: #009879
}
</style>