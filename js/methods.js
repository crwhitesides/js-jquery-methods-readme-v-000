'use strict';

function fancySchmancy() {
  $('p#bacon').addClass("iAmFancy")
  return $('.iAmFancy')
}

function addText(sentence) {
  $('p:first-child + p').append(sentence)
  return $('p:first-child + p')
}

function showDolphin() {
  $('img#hidden').show()
}

function hideImage() {
  $('img[alt="pie in face"]').hide()
}

function fadeIt() {
  $('div#favorite-snacks').fadeIn()
}

function fadeItOut() {
  $('p:last').fadeOut(0)
}

function findItByClass(selector) {
  return $(selector).hasClass('flatironLink')
}

function formValue() {
  return $('input:last').val()
}
