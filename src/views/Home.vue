<template>
  <div class="home">
    <h1 class="title">Welcome to my Simple Physics SPA!</h1>
    <img src="https://media1.tenor.com/m/CughyuQS8XIAAAAC/breakingbad-science.gif" alt="science" class="image" />
    <p class="description">This is the homepage of my simple single-page application.</p>
    <router-link to="/ohms-law" class="ohms-law-link">Go to Ohm's Law Calculator</router-link>
    <br>
    <router-link to="/mev-converter" class="mev-converter-link">Go to MeV Converter</router-link>
    <br>
    <img src="https://media1.tenor.com/m/_QQtoR61dMsAAAAC/scientist-science.gif" />
    <p class="view-counter">You have visited homepage {{ viewCount }} {{ viewCount === 1 ? 'time' : 'times' }} during this visit.</p>
  </div>
</template>

<script>
import { useCounterStore } from '../stores/counter';

export default {
  name: 'Home',
  setup() {
    const counterStore = useCounterStore();

    return {
      viewCount: counterStore.count,
      lastOhmsLawValues: null,
      lastEnergyConversionValues: null,
    };
  },
};
</script>

<style scoped>
.home {
  margin-top: 100px;
  text-align: center;
}

.title {
  font-size: 32px;
  color: #333;
}

.description {
  font-size: 18px;
  color: #666;
  margin-top: 20px;
}

.last-values {
  margin-top: 20px;
}

.last-values h2 {
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
}

.last-values p {
  font-size: 16px;
  color: #666;
  margin-top: 5px;
}

.ohms-law-link,
.mev-converter-link {
  font-size: 18px;
  color: #007bff;
  text-decoration: none;
  margin-top: 20px;
  display: inline-block;
}

.ohms-law-link:hover,
.mev-converter-link:hover {
  text-decoration: underline;
}

.view-counter {
  font-size: 16px;
  color: #888;
  margin-top: 20px;
}
</style>
