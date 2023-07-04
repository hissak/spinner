const spinnerArray = ['|', '/', '-', '\\', '|']
const spinner = () => {
  let timer = 0;
  for (let val of spinnerArray) {
    setTimeout(() => {
      process.stdout.write(`\r${val}  `);
    }, timer);
    timer += 200;
  }
};



spinner();


