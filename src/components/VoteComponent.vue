<template>
  <div>
    <h1>Vote for your fav feature</h1>
    <p>Total Votes for Mev: {{ mevVotes }}</p>
    <p>Total Votes for Ohm: {{ ohmVotes }}</p>
    <button @click="voteForMev">Vote for Mev</button>
    <button @click="voteForOhm">Vote for Ohm</button>
  </div>
</template>

<script>
import { db } from '@/firebase';
import { getDoc, collection, doc, setDoc } from 'firebase/firestore';

export default {
  data() {
    return {
      mevVotes: 0,
      ohmVotes: 0
    };
  },
  methods: {
    async voteForMev() {
      await this.updateVotes('mev');
      this.$emit('voted', 'mev'); 
    },
    async voteForOhm() {
      await this.updateVotes('ohm');
      this.$emit('voted', 'ohm'); 
    },
    async updateVotes(candidate) {
      try {
        const docRef = doc(collection(db, 'votes'), candidate);
        const docSnap = await getDoc(docRef);
        const currentVotes = docSnap.exists() ? docSnap.data().total : 0;

        await setDoc(docRef, { total: currentVotes + 1 });

        this[candidate + 'Votes'] = currentVotes + 1;
      } catch (error) {
        console.error('Error updating votes:', error);
      }
    }
  },
  async created() {
    try {
      const mevDocRef = doc(collection(db, 'votes'), 'mev');
      const ohmDocRef = doc(collection(db, 'votes'), 'ohm');
      const mevDocSnap = await getDoc(mevDocRef);
      const ohmDocSnap = await getDoc(ohmDocRef);

      this.mevVotes = mevDocSnap.exists() ? mevDocSnap.data().total : 0;
      this.ohmVotes = ohmDocSnap.exists() ? ohmDocSnap.data().total : 0;
    } catch (error) {
      console.error('Error fetching initial votes:', error);
    }
  }
};
</script>

