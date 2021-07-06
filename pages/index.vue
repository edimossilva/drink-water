<template>
  <div class="columns hero is-fullheight is-centered">
    <section class="section">
      <div class="columns is-multiline">
        <p class="title column is-full has-text-centered">
          {{ $t('app_title') }}
        </p>
        <div class="column is-full">
          <div class="box mx-5">
            <div class="column is-half is-offset-one-quarter">
              <div class="field is-normal">
                <label class="label" for="weightKg">{{ $t('your_weight_in_kg') }}</label>
              </div>
              <input v-model="weightKg" name="weightKg" class="input" type="number" placeholder="60">
            </div>

            <div class="column is-half is-offset-one-quarter mt-5">
              <div class="field is-normal">
                <label class="label" for="weightKg">{{ $t('your_age') }}</label>
              </div>
              <input v-model="ageNumber" class="input" type="number" placeholder="24">
            </div>
          </div>
        </div>
      </div>

      <div>
        <div v-if="hasWeightAndAge" class="columns is-multiline has-text-centered">
          <div class="column is-full title">
            <p>{{ $n(waterLiters) }} {{ $t('per_day') }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
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
