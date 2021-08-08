// Constructor Function
var Tom = {
  name: 'Tom',
  stomach: [],
  eat: function (mouse) {
    this.stomach.push(mouse);
    mouse.isEat();
    return this; // Lưu ý: có return this để dùng method chaining
  },
};

function Mouse(name, color) {
  this.name = name;
  this.color = color;
  this.status = 'alive';
  this.isEat = function () {
    this.status = 'die';
  };
}

var m1 = new Mouse('m1', 'black');
var m2 = new Mouse('m2', 'white');
var m3 = new Mouse('m3', 'blue');

Tom.eat(m1).eat(m2).eat(m3);

console.log(Tom);
