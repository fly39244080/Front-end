(function () {
  const group = {
    total: 10,
    male: 6,
    female: 4,
    peoples: [{
      age: 12,
      sex: 'male'
    }, {
      age: 18,
      sex: 'female'
    }, {
      age: 22,
      sex: 'male'
    }, {
      age: 34,
      sex: 'male'
    }, {
      age: 60,
      sex: 'male'
    }, {
      age: 73,
      sex: 'female'
    }, {
      age: 6,
      sex: 'female'
    }, {
      age: 47,
      sex: 'male'
    }, {
      age: 3,
      sex: 'male'
    }, {
      age: 24,
      sex: 'female'
    }]
  }

  group.find = function (condition, age) {
    const length = arguments.length

    switch (length) {
      case 0:
        return {
          peoples: this.peoples,
          count: this.peoples.length
        }

      case 1:
        if (!!condition) {
          const male = this.peoples.filter(item => item.sex === 'male')
          return {
            peoples: male,
            count: male.length
          }
        } else {
          const female = this.peoples.filter(item => item.sex === 'female')
          return {
            peoples: female,
            count: female.length
          }
        }

      case 2:
        if (!!condition) {
          const elder = this.peoples.filter(item => item.age >= age)
          return {
            peoples: elder,
            count: elder.length
          }
        } else {
          const younger = this.peoples.filter(item => item.age < age)
          return {
            peoples: younger,
            count: younger.length
          }
        }
    }
  }

  console.log(group.find())
  console.log(group.find(1))
  console.log(group.find(0))
  console.log(group.find(1, 30))
  console.log(group.find(0, 40))
}())