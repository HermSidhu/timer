const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const timer = function(key) {
  setTimeout(() => {process.stdout.write('\nbeep!')
}, key * 1000);
};


process.stdin.on('data', (key) => {
  if (key === '\u0003') 
    process.exit(console.log("\nThanks for using me, ciao!"));
  if (key === 'b')
   process.stdout.write('beep!');
  if (key >= 1 && key <= 9)
  console.log(`\nsetting timer for ${key} seconds`)
  timer(key);
});