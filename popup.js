document.addEventListener('DOMContentLoaded', function() {
  var clearBtn = document.getElementById('clearBtn');

  clearBtn.addEventListener('click', function() {
    chrome.history.deleteAll(function() {
      console.log('History cleared.');
    });

    chrome.browsingData.remove({
      "since": 0
    }, {
      "appcache": true,
      "cache": true,
      "cookies": true,
      "downloads": true,
      "fileSystems": true,
      "formData": true,
      "indexedDB": true,
      "localStorage": true,
      "pluginData": true,
      "passwords": true,
      "serviceWorkers": true,
      "webSQL": true
    }, function() {
      console.log('Caches cleared.');
    });
  });
});
