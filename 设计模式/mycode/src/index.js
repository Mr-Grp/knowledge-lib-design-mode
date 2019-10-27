class Trip {
  constructor(car) {
      this.car = car
  }
  start() {
      console.log(`行程开始，名称: ${this.car.name}, 车牌号: ${this.car.number}`)
  }
  end(distance = 0) {
      console.log('行程结束，价格: ' + (this.car.price * distance))
  }
}

class Car {
  constructor(number, name, price, type) {
      this.number = number
      this.name = name
      this.price = price
      this.type = type
  }
}

function carFactory(number, name, type) {
  let price
  if(type === '快车') {
    price = 1
  } else if (type === '专车') {
    price = 2
  }
  return new Car(number, name, price, type)
}

let car = carFactory(100, '桑塔纳', '快车')
let trip = new Trip(car)
trip.start()
trip.end(5)