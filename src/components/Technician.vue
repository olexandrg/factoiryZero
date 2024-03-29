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

      <!-- Add new fault report -->
      <h2>Add a new fault report</h2>
      <div class="fault-report-form">
        <form>
          <div class="row">
            <div class="form-group col-md-6">
              <label htmlFor="Fault BIN">BIN: </label>
              <input
                type="text"
                class="form-control"
                v-model="bin"
                name="bin"
                id="bin"
                aria-describedby="emailHelp"
                placeholder=" "
              />
            </div>
            <div class="form-group col-md-6">
              <label htmlFor="fault">Fault: </label>
              <input
                type="text"
                class="form-control"
                v-model="fault"
                name="fault"
                id="fault"
                placeholder=" "
              />
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-12">
              <label htmlFor="status">Status: </label>
              <input
                type="text"
                class="form-control"
                v-model="status"
                name="status"
                id="status"
                aria-describedby="emailHelp"
                placeholder=" "
              />
            </div>
          </div>
          <button
            type="button"
            @click="createNewReport()"
            class="btn btn-danger"
          >
            Create Report
          </button>
          <span> {{ this.submitText }}</span>
        </form>
      </div>
    </div>
    <div class="tool-dir">
      <span v-if="displayDirections == true">
        <h2>Build Steps - {{ this.displayBin }}</h2>

        <table class="directions-table">
          <thead>
            <tr>
              <th>Step</th>
              <th>Directions</th>
              <th>Date Modified</th>
              <th>Tech Writer</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in this.directions" :key="item.id">
              <td>{{ index + 1 }}</td>
              <td>{{ item }}</td>
              <td>Date(todo)</td>
              <td>Jayna Doe</td>
            </tr>
          </tbody>
        </table>
      </span>
    </div>
  </div>
</template>

<script>
import { getAllTools, getToolDirections } from "../services/TechnicianService";
import { createReport } from "../services/EngineerService";

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
    createNewReport() {
      let today = new Date();
      const payload = {
        bin: this.bin,
        fault: this.fault,
        status: this.status,
        dateAdded: today.toISOString().substr(0, 10),
      };
      createReport(payload).then((response) => {
        console.log(response);
        this.displaySubmitStatus(response);
      });
      this.displaySubmitStatus();
    },
    displaySubmitStatus(response) {
      if (response == "success") {
        this.submitStatus = !this.submitStatus;
        this.submitText = this.submitStatus ? " Success" : "";
      } else {
        this.submitStatus = false;
        this.submitText = "Error";
      }
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
input[type="text"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
button[type="button"] {
  background-color: #009879;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button[type="button"]:hover {
  background-color: #005b48;
}
.fault-report-form {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 90%;
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
</style>