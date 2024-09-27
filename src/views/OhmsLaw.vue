<template>
  <div class="ohms-law">
    <div class="text-center mt-4">
      <router-link to="/" class="return-button">Return to Home</router-link>
    </div>
    <div class="calculator-container">
      <div id="calculator" class="ohms-law-container">
        <div class="container">
          <h1 class="text-center mb-4">Ohm's Law Calculator</h1>

          <div class="row justify-content-center mb-4">
            <div class="col-md-6">
              <div class="input-group">
                <label class="input-label" for="voltage">Voltage (V): </label>
                <input type="number" class="form-control" v-model="voltage" @input="updateOhmsLaw" />
              </div>
            </div>

            <div class="col-md-6">
              <div class="input-group">
                <label class="input-label" for="current">Current (I): </label>
                <input type="number" class="form-control" v-model="current" @input="updateOhmsLaw" />
              </div>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-md-6">
              <div class="result-group">
                <label class="input-label" for="resistance">Resistance (R): </label>
                <p class="result-value">{{ resistance }}</p>
              </div>
            </div>
          </div>

          <div v-if="divisionByZeroMessage" class="alert alert-danger mt-3">
            {{ divisionByZeroMessage }}
          </div>
        </div>
      </div>

      <div id="explanation" class="explanation-container mt-4">
        <div class="container">
          <h2 class="text-center">Ohm's Law Explanation</h2>
          <p>Ohm's Law states that the current (I) flowing through a conductor between two points is directly proportional to the voltage (V) across the two points and inversely proportional to the resistance (R) between them.</p>
          <p>The formula is expressed as: <strong>V = I * R</strong></p>
          <p>Where:</p>
          <ul>
            <li><strong>V</strong> is the voltage measured in volts (V)</li>
            <li><strong>I</strong> is the current measured in amperes (A)</li>
            <li><strong>R</strong> is the resistance measured in ohms (Ω)</li>
          </ul>
          <img src="https://media1.tenor.com/m/10UN0NiLAtkAAAAC/hydro-playing.gif" class="image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      voltage: 1,
      current: 1,
      resistance: 1,
      divisionByZeroMessage: null
    };
  },
  methods: {
    updateOhmsLaw() {
      this.divisionByZeroMessage = null;

      if ( this.voltage) {
        if (this.current !== 0) {
          this.resistance = this.voltage / this.current;
          //this.$emit('ohmsLawUpdated', { voltage: this.voltage, current: this.current, resistance: this.resistance });
        } else {
          this.divisionByZeroMessage = 'Cannot divide by zero!';
          this.resistance = 0;
          alert('Cannot divide by zero!');
        }
      } else {
        this.resistance = 0;
      }
    }
  }
};
</script>

<style scoped>
.ohms-law {
  font-family: Arial, sans-serif;
  color: #9e9e9e;
}

.image {
  display: block;
  margin: 0 auto;
}

.calculator-container {
  margin-top: 20px;
}

.ohms-law-container {
  padding: 20px;
  border-radius: 5px;
}

.input-label {
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #afaeae;
  border-radius: 5px;
}

.result-group {
  margin-top: 20px;
}

.result-value {
  font-size: 18px;
  font-weight: bold;
}

.explanation-container {
  margin-top: 40px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.text-center {
  text-align: center;
}

.mb-4 {
  margin-bottom: 20px;
}

.mt-4 {
  margin-top: 20px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col-md-6 {
  flex: 0 0 50%;
  max-width: 50%;
  padding-right: 15px;
  padding-left: 15px;
}

ul {
  margin-top: 10px;
  margin-bottom: 10px;
}

li {
  margin-bottom: 5px;
}

.return-button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #092544;
  color: #9b9b9b;
  text-decoration: none;
  border-radius: 5px;
}

.return-button:hover {
  background-color: #1b2c3d;
}
</style>
