// default login values
const username_field = document.getElementById('username');
const password_field = document.getElementById('password');
// username_field.value = "test";
// password_field.value = "test";


// delete a particual feedback 
async function del_feedback(id){
  const result = await axios.delete(`/api/delete/feedback/${id}`);
  console.log("api success");
}

const $dlt_feedback = $('.dlt-feedback');
$dlt_feedback.on('click', function(e){
  e.preventDefault();

  const $fb = $(e.target.parentElement);
  const id = parseInt($($fb[0].firstChild.nextSibling.childNodes[0])[0].innerText.slice(3));

  console.log(id);
  del_feedback(id);
  window.location.reload();
  // location.reload();

});

// delete users and their feedback
async function del_user(username) {
  const result = await axios.delete(`/api/delete/user/${username}`)
  console.log("api success");
}

const $dlt_user = $('.dlt-user');
$dlt_user.on('click', function(e){
  e.preventDefault();
  const usrname = $(e.target.previousSibling)[0].nodeValue;

  del_user(usrname)

})

