<template>
  <div class="wrapper">
    <!-- Lists all tools currently on the factory floor -->
    <div class="tool-info">
      <h2>Current Factory Tool List</h2>
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
                <button @click="loadDirections(item.bin)">Directions</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="tool-dir">
      <span v-if="displayDirections == true">
        <h2>Build Steps - {{ this.displayBin }}</h2>

        <!-- Directions for: {{this.displayBin}} -->
        <br />
        <!-- new stuff -->
        <table class="directions-table">
          <thead>
            <tr>
              <th>Step</th>
              <th>Date Modified</th>
              <th>Tech Writer</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in this.directions" :key="item.id">
              <td>{{ index + 1}}</td>
              <td>Date(todo)</td>
              <td>Jayna Doe</td>
              <td>
                <button @click="editDirections(item, index)">Save</button>
              </td>
            <input
                type="text"
                class="form-control"
                v-model="directions[index]"
                name="directions"
                id="directions"
                aria-describedby="directionsEdit"
                placeholder=""
            />
            </tr>
          </tbody>
        </table>
      </span>
    </div>
  </div>
</template>

<script>
import { getAllTools, getToolDirections } from "../services/TechnicianService";
import { editToolDirections } from "../services/WriterService";

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
      directions: "",
    };
  },
  methods: {
    getAllTools() {
      getAllTools().then((response) => {
        this.tools = response;
        this.numberOfTools = this.tools.length;
      });
    },
    loadDirections(bin) {
      getToolDirections(bin).then((response) => {
        console.log("Get Tool Directions response: ", response);

        // check if correct BIN was searched in the query
        if (response.status != "200") {
          console.log("Directions mismatch!");
        }
        this.displayBin = response.bin;
        this.directions = response.directions;
      }),
        // mark true to let the directions div be viewable
        (this.displayDirections = true);
    },
    editDirections(inputDirections, inputStep) {
        const payload = {
        step: inputStep,
        bin: this.displayBin,
        directions: inputDirections
      };
      editToolDirections(payload).then((response) => {
        console.log(response);
        console.log("check put response", response);
      });
    },
  },
  // Automatically loads all tools on page load
  beforeMount() {
    this.displayDirections = false;
    this.getAllTools();
  },
};
</script>

<style>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: start;
}
.tool-dir {
  display: grid;
  justify-self: center;
  padding-right: 2em;
  padding-left: 10px;
}
.tool-info {
  padding-left: 10px;
  width: 100%;
}
.tool-table table,
.directions-table table {
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
.directions-table thead tr {
    background-color: rgb(0, 174, 255);
    color: #ffffff;
    text-align: left;
		padding: 1em;
}
.tool-table th,
.tool-table td {
  padding: 12px 15px;
}
.directions-table th,
.directions-table td {
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
.directions-table tbody tr {
  border-bottom: 1px solid #dddddd;
}
.directions-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}
.directions-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}
.tool-table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}
</style>