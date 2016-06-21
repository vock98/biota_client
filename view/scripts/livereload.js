    var chokidar = require('chokidar');
    var watcher  = chokidar.watch('.', {ignored: /[\/\\]\./});
    watcher.on('all', function(event, path) {
      if (location && event == "change")
        location.reload();
    });