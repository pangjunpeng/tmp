/**
 *
 * Created by pang On  。
 */

function ajax(url, data, onsuccess, onerror) {
  return Promise.resolve().then(function(){
    var xhr = new XMLHttpRequest()
    xhr.onload = function () {
      onsuccess(xhr.responseText)
    }
    xhr.open('get', url, true)
    xhr.send()
  })
  
}

function delayAjax(url, data, onsuccess, onerror) {
  return Promise.resolve().then(function () {
    var xhr = new XMLHttpRequest()
    xhr.onload = function () {
      setTimeout(function () {
        onsuccess(xhr.responseText)
      }, 3000)
    }
    xhr.open('get', url, true)
    xhr.send()
  })
  
}
