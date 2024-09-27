<template>
  <div class="mev-converter">
    <router-link to="/" class="return-button">Return to Home</router-link>
    <h1 class="title">MeV Converter</h1>
    <p class="description">Convert energy between Mega-electronvolts (MeV) and Joules.</p>

    <div class="converter-form">
      <div class="input-group">
        <label for="energyInMeV">Energy in MeV:</label>
        <input type="number" v-model="energyInMeV" class="form-control" />
      </div>

      <div class="input-group">
        <label for="energyInJoules">Energy in Joules:</label>
        <input type="number" v-model="energyInJoules" class="form-control" />
      </div>
    </div>

    <div class="explanation">
        <p>Mega-electronvolts (MeV) is a unit of energy commonly used in particle physics and nuclear physics. It represents a million electronvolts.</p>
        <p>One electronvolt (eV) is the amount of kinetic energy gained or lost by an electron when it is accelerated through an electric potential difference of one volt.</p>
      </div>
    <img src="https://media1.tenor.com/m/b6vXi-LxP50AAAAd/oakley-sciencedog.gif">

  </div>
</template>

<script>
export default {
  data() {
    return {
      energyInMeV: 0,
    };
  },
  computed: {
  energyInJoules: {
    get() {
      const conversionFactor = 1.60218e-13;
      const joules = (this.energyInMeV * conversionFactor).toFixed(12);
      //this.$emit('energyConversionUpdated', { energyInMeV: this.energyInMeV, energyInJoules: joules });
      return joules;
    },
    set(value) {
      const conversionFactor = 1.60218e-13;
      this.energyInMeV = (value / conversionFactor).toFixed(12);
      //this.$emit('energyConversionUpdated', { energyInMeV: this.energyInMeV, energyInJoules: value });
    },
  },
}
};
</script>

<style scoped>
.mev-converter {
  text-align: center;
  margin-top: 50px;
}

.title {
  font-size: 24px;
  font-weight: bold;
}

.description {
  margin-top: 10px;
  font-size: 16px;
}

.converter-form {
  margin-top: 20px;
}

.input-group {
  margin-bottom: 10px;
}

label {
  display: block;
  font-weight: bold;
}

.form-control {
  width: 200px;
  padding: 5px;
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
