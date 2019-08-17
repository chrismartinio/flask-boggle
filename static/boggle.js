// Document load
let score = 0;

$(function () {
  // Submit button event listener
  $('#submit_button').on('click', async function (e) {
    e.preventDefault();
    let guess = $('#guess').val();

    result = await axios.post('/submit', { guess });

    $("#validity").html(result.data)

    if (result.data === "ok") {
      score += guess.length
    }

    $("#score").html(score)
  });
});

let seconds = 5;

// for (let i = seconds; i >= 0; i--) {
//   if (i > 0) {
//     $('#timer').html(i);
//   }
//   else {
//     console.log('timer up');
//   }
// }



let timerId = setInterval(async function () {
  if (seconds >= 0) {
    $("#timer").html(seconds--);
  } else {
    $('#submit_button').off('click')
    $('#submit_button').on('click', function (e) {
      e.preventDefault();
    });
    clearInterval(timerId);
    console.log('timer up')
    axios.post('/scores', { score })


  }
}, 1000);