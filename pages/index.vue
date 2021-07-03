<template>
  <section class="section">
    <div class="columns is-multiline has-text-centered">
      <p class="title column is-full">
        {{ $t('your_weight_in_kg') }} {{weightKg}}
      </p>
      <div class="column is-full">
        <div class="column is-half is-offset-one-quarter">
          <input v-model="weightKg" class="input" type="number" placeholder="60">
        </div>
      </div>
    </div>

    <div class="columns is-multiline has-text-centered">
      <p class="title column is-full">
        {{ $t('your_age') }} {{ ageNumber }}
      </p>
      <div class="column is-full">
        <div class="column is-half is-offset-one-quarter">
          <input v-model="ageNumber" class="input" type="number" placeholder="24">
        </div>
      </div>
    </div>
    <div>
      <div v-if="hasWeightAndAge" class="columns is-multiline has-text-centered">
        <p class="title column is-full">
          {{ $t('you_should_drink', { waterLiters: waterLiters }) }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'HomePage',

  data () {
    return {
      weightKg: null,
      ageNumber: null
    }
  },
  methods: {
    waterMlQuantityPerKgPerAge(age) {
      if (age <= 17) {
        return 40
      } else if(age >= 18 && age <= 55) {
        return 35
      } else if(age >= 55 && age <= 65) {
        return 30
      } else {
        return 25
      }
    }
  },
  computed: {
    waterLiters: function () {
      const { waterMlQuantityPerKgPerAge, ageNumber, weightKg } = this
      const dailyMlWaterQuantity = waterMlQuantityPerKgPerAge(ageNumber) * weightKg
      const dailyLiterWaterQuantity = dailyMlWaterQuantity / 1000
      return dailyLiterWaterQuantity
    },

    hasWeightAndAge: function() {
      const {  ageNumber, weightKg } = this
      return ageNumber > 0 && weightKg > 0
    }
  }
}
</script>
