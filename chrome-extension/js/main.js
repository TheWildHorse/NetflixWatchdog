new function() {
	var ws = null;
	var connected = false;

	var connectionStatus;
  var watchingStatus;

	var open = function() {
		ws = new WebSocket('wss://localhost:9000');
		ws.onopen = onOpen;
		ws.onclose = onClose;
		ws.onmessage = onMessage;
		ws.onerror = onError;

		connectionStatus.innerHTML = "CONNECTING...";
	}

	var close = function() {
		if (ws) {
			connectionStatus.innerHTML = "CLOSING...";
			ws.close();
		}
		connected = false;
		connectionStatus.innerHTML = "CLOSED";
	}

	var onOpen = function() {
		connectionStatus.innerHTML = "CONNECTED";
		connected = true;
	};

	var onClose = function() {
		connectionStatus.innerHTML = "CLOSED";
		ws = null;
	};

	var onMessage = function(event) {
		var data = event.data;
		data = JSON.parse(data);
    if(data.type === "IDENTITIES") {
      if(data.identities.length === 0) {
        watchingStatus.innerHTML = "NOT WATCHING";
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {text: 'pause'});
        });
      }
      else {
        watchingStatus.innerHTML = "Watching";
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {text: 'play'});
        });
      }
    }
	};

	var onError = function(event) {
		alert(event.data);
	}

	WebSocketClient = {
		init: function() {
			watchingStatus = document.getElementById('watchingStatus');
			connectionStatus = document.getElementById('connectionStatus');
      open();
		}
	};
}

WebSocketClient.init();
