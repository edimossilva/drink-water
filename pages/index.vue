<template>
  <section class="section">
    <div class="columns is-multiline has-text-centered">
      <p class="title column is-full">
        Your weight in kg: {{ calculatedWeight }}
      </p>
      <div class="column is-full">
        <div class="select is-rounded">
            <select v-model="hundredNumber">
              <option v-for="number in numbersWithId(weightNumbersHundred)" :key="number.key">
                {{ number.value }}
              </option>
            </select>
          </div>
          <div class="select is-rounded">
            <select v-model="tenNumber">
              <option v-for="number in numbersWithId(weightNumbersTen)" :key="number.key">
                {{ number.value }}
              </option>
            </select>
          </div>
          <div class="select is-rounded">
            <select v-model="unitNumber">
              <option v-for="number in numbersWithId(weightNumbersUnit)" :key="number.key">
                {{ number.value }}
              </option>
            </select>
          </div>
      </div>
    </div>

    <div class="columns is-multiline has-text-centered">
      <p class="title column is-full">
        Your age : {{ calculatedAge }} {{ $t('message') }}
      </p>
      <div class="column is-full">
        <div class="select is-rounded">
            <select v-model="hundredAgeNumber">
              <option v-for="number in numbersWithId(weightAgeNumbersHundred)" :key="number.key">
                {{ number.value }}
              </option>
            </select>
          </div>
          <div class="select is-rounded">
            <select v-model="tenAgeNumber">
              <option v-for="number in numbersWithId(weightAgeNumbersTen)" :key="number.key">
                {{ number.value }}
              </option>
            </select>
          </div>
          <div class="select is-rounded">
            <select v-model="unitAgeNumber">
              <option v-for="number in numbersWithId(weightAgeNumbersUnit)" :key="number.key">
                {{ number.value }}
              </option>
            </select>
          </div>
      </div>
    </div>
    <div>
      <div v-if="hasWeightAndAge" class="columns is-multiline has-text-centered">
        <p class="title column is-full">
          You should drink {{ waterLiters }} liters per day
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
      weightNumbersHundred: [0,1,2,3,4],
      weightNumbersTen: [0,1,2,3,4,5,6,7,8,9],
      weightNumbersUnit: [0,1,2,3,4,5,6,7,8,9],
      weightAgeNumbersHundred: [0,1],
      weightAgeNumbersTen: [0,1,2,3,4,5,6,7,8,9],
      weightAgeNumbersUnit: [0,1,2,3,4,5,6,7,8,9],
      hundredNumber: 0,
      tenNumber: 0,
      unitNumber: 0,
      hundredAgeNumber: 0,
      tenAgeNumber: 0,
      unitAgeNumber:0
    }
  },
  methods: {
    numbersWithId(numbers) {
      return numbers.map(n => ({ value: n, key: n + Math.random()}))
    },
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
    calculatedWeight: function () {
      const { hundredNumber, tenNumber, unitNumber} = this

      return hundredNumber * 100 + tenNumber * 10 + unitNumber * 1
    },

    calculatedAge: function () {
      const { hundredAgeNumber, tenAgeNumber, unitAgeNumber} = this

      return hundredAgeNumber * 100 + tenAgeNumber * 10 + unitAgeNumber * 1
    },

    waterLiters: function () {
      const { waterMlQuantityPerKgPerAge, calculatedAge, calculatedWeight } = this
      const dailyMlWaterQuantity = waterMlQuantityPerKgPerAge(calculatedAge) * calculatedWeight
      const dailyLiterWaterQuantity = dailyMlWaterQuantity / 1000
      return dailyLiterWaterQuantity
    },

    hasWeightAndAge: function() {
      const {  calculatedAge, calculatedWeight } = this
      return calculatedAge > 0 && calculatedWeight > 0
    }
  }
}
</script>
