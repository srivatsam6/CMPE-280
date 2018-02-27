//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times
var $firstName = $("#firstName");
var $lastName = $("#lastName");
var $email = $("#Email");
var $password = $("#password");
var $confirmPassword = $("#confirm_password");

//Hide hints
$("form span").hide();

function isFirstNameValid() {
  return $firstName.val().match(/^[a-zA-Z]+$/);
}

function isLastNameValid() {
  return $lastName.val().match(/^[a-zA-Z]+$/);
}

function isEmailValid() {
  return $email.val().match(/^.+@.+\..{2,4}$/);
}

function isPasswordValid() {
  return $password.val().length > 8;
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val();
}

function canSubmit() {
  return isPasswordValid() && arePasswordsMatching();
}

function firstNameEvent(){
    //Find out if first name is valid
    if(isFirstNameValid()) {
      //Hide hint if valid
      $firstName.next().hide();
    } else {
      //else show hint
      $firstName.next().show();
    }
}

function lastNameEvent(){
    //Find out if last name is valid
    if(isLastNameValid()) {
      //Hide hint if valid
      $lastName.next().hide();
    } else {
      //else show hint
      $lastName.next().show();
    }
}

function emailEvent(){
    //Find out if email is valid
    if(isEmailValid()) {
      //Hide hint if valid
      $email.next().hide();
    } else {
      //else show hint
      $email.next().show();
    }
}

function passwordEvent(){
    //Find out if password is valid
    if(isPasswordValid()) {
      //Hide hint if valid
      $password.next().hide();
    } else {
      //else show hint
      $password.next().show();
    }
}

function confirmPasswordEvent() {
  //Find out if password and confirmation match
  if(arePasswordsMatching()) {
    //Hide hint if match
    $confirmPassword.next().hide();
  } else {
    //else show hint
    $confirmPassword.next().show();
  }
}

function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit());
}

//When event happens on First Name input
$firstName.focus(firstNameEvent).keyup(firstNameEvent).keyup(enableSubmitEvent);

//When event happens on Last Name input
$lastName.focus(lastNameEvent).keyup(lastNameEvent).keyup(enableSubmitEvent);

//When event happens on Email input
$email.focus(emailEvent).keyup(emailEvent).keyup(enableSubmitEvent);

//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

//When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();
