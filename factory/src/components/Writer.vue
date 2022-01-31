<template>
  <div class="wrapper">
    <!-- Lists all tools currently on the factory floor -->
    <div class="tool-info">
    <h2> Current Factory Tool List </h2>
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
            <td>
              <button @click="loadDirections(item.bin)">
                Directions
              </button>
              </td>
          </tr>
        </tbody>
      </table>
    </div>
</div>
    <div class="tool-dir">
      <span v-if="displayDirections == true">
        <h2> Build Steps - {{this.displayBin}} </h2>

        <!-- Directions for: {{this.displayBin}} -->
        <br>
        {{ this.directions.dir1 }} 
        {{ this.directions.dir2 }}
      </span>
    </div> 
  </div>
</template>

<script>
import { getAllTools, getToolDirections } from "../services/TechnicianService";

export default {
  name: "Technician",
  data() {
    return {
      tools: [],
      numberOfTools: 0,
      bin: "",
      fault: "",
      status: "",
      submitStatus: false,
      submitText: "",
      displayDirections: false,
      displayBin: "",
      directions: ""
    };
  },
  methods: {
    getAllTools() {
      getAllTools().then((response) => {
        this.tools = response;
        this.numberOfTools = this.tools.length;
      });
    },
    displaySubmitStatus(response) {
        if (response == 'success') {
            this.submitStatus = !this.submitStatus
            this.submitText = this.submitStatus ? ' Success' : ''
        }
        else {
            this.submitStatus = false
            this.submitText = 'Error'
        }

    },
    loadDirections(bin) {
      getToolDirections(bin).then(response => {
        console.log("Get Tool Directions response: ", response);

        // check if correct BIN was searched in the query
        if (response.status != "200") {
          console.log("Directions mismatch!")
        }
        this.displayBin = response.bin
        this.directions = response.directions;
      }),

      // mark true to let the directions div be viewable
      this.displayDirections = true
    }
  },
  // Automatically loads all tools on page load
  beforeMount() {
    this.displayDirections = false;
    this.getAllTools();
  }
};
</script>

<style>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: start;
}
.tool-dir {
  padding-left: 10px;
}
.tool-info {
  padding-left: 10px;
  width: 100%;
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
  color: #009879;
}
</style>