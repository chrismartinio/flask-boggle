// Document load

$(function () {
  console.log('loaded');

  // Submit button event listener
  $('#submit_button').on('click', async function (e) {
    e.preventDefault();
    let guess = $('#guess').val();
    console.log(guess);

    await axios.post('/submit', { guess });

  });
});