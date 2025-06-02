// index.js
function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = greet;

// Optional test
if (require.main === module) {
  console.log(greet("GitHub Actions"));
}
