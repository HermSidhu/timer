let arr = process.argv.slice(2)

const timer = function(arr) {
  for (let i in arr) {
    let parr = parseInt(arr[i])
    if (isNaN(parr) || parr < 0) {
      return 0
    } setTimeout(() => {process.stdout.write('beep!')
  }, arr[i] * 1000);
  };
};
timer(arr);