function test2(a, b) {
  for (var viking in arguments) {
    console.log(arguments[viking]);
  }
}
test2(1, 2, 3, 5, 6);
