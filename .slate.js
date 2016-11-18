var dirLeft = 'left';
var dirUp = 'up';
var dirRight = 'right';
var dirDown = 'down';

var pushOp = function (dir, size) {
  return S.op("push", {
    "direction": dir,
    "style": "bar-resize:screenSize" + size
  });
}

var cornerOp = function (dir) {
  return S.op("corner", {
    "direction": dir,
    "width": "screenSizeX/2",
    "height": "screenSizeY/2"
  });
}

var leftEdgeOp = pushOp(dirLeft, "X/2");
var rightEdgeOp = pushOp(dirRight, "X/2");
var upEdgeOp = pushOp(dirUp, "Y/2");
var downEdgeOp = pushOp(dirDown, "Y/2");
var fullScreenOp = pushOp(dirUp, "Y");

var getRectMidPoint = function (rect) {
  return {
    x: rect.x + rect.width / 2,
    y: rect.y + rect.height / 2
  };
}

var posChange = '+10%';
var negChange = '-10%';

var isWindowOnRightHalfOfScreen = function () {
  var screenMidPoint = getRectMidPoint(S.screen().rect());
  var windowMidPoint = getRectMidPoint(S.window().rect());
  // add offset because maximized window has an X coordinate of 2
  return windowMidPoint.x > screenMidPoint.x + 3;
}

var isWindowOnBottomHalfOfScreen = function () {
  var screenMidPoint = getRectMidPoint(S.screen().rect());
  var windowMidPoint = getRectMidPoint(S.window().rect());
  // add offset because of the command bar
  return windowMidPoint.y > screenMidPoint.y + 12;
}

var resize = function (dir) {
  var isOnRight = isWindowOnRightHalfOfScreen();
  var isOnBottom = isWindowOnBottomHalfOfScreen();

  var anchor = isOnBottom ? 'bottom-' : 'top-';
  anchor += isOnRight ? 'right' : 'left';
  S.log('Anchor: ' + anchor);

  var width = '+0', height = '+0';
  if (dir === dirLeft) {
    if (isOnRight) {
      width = posChange;
      S.op("nudge", {"x": negChange, "y": height}).run();
      anchor = 'top-left';
    } else {
      width = negChange;
    }
  }
  else if (dir === dirRight) {
    width = isOnRight ? negChange : posChange;
  }
  else if (dir === dirUp) {
    if (isOnBottom) {
      height = posChange;
      S.op("nudge", {"x": width, "y": negChange}).run();
      anchor = 'top-left';
    } else {
      height = negChange;
    }
  }
  else if (dir === dirDown) {
    height = isOnBottom ? negChange : posChange;
  }

  S.log('width: ' + width);
  S.op("resize", {
    "width": width,
    "height": height,
    "anchor": anchor
  }).run();
}

var resizeLeft = function () {
  resize(dirLeft);
}
var resizeRight = function () {
  resize(dirRight);
}
var resizeUp = function () {
  resize(dirUp);
}
var resizeDown = function () {
  resize(dirDown);
}
S.bindAll({
  "left:ctrl;alt": resizeLeft,
  "right:ctrl;alt": resizeRight,
  "up:ctrl;alt": resizeUp,
  "down:ctrl;alt": resizeDown,
  "up:cmd,alt,shift": fullScreenOp,
  "down:cmd,alt,shift": downEdgeOp,
  "left:cmd,alt,shift": leftEdgeOp,
  "right:cmd,alt,shift": rightEdgeOp,
  "pad5:cmd,shift": fullScreenOp,
  "pad8:cmd,shift": upEdgeOp,
  "pad2:cmd,shift": downEdgeOp,
  "pad4:cmd,shift": leftEdgeOp,
  "pad6:cmd,shift": rightEdgeOp,
  "pad7:cmd,shift": cornerOp("top-left"),
  "pad9:cmd,shift": cornerOp("top-right"),
  "pad1:cmd,shift": cornerOp("bottom-left"),
  "pad3:cmd,shift": cornerOp("bottom-right"),
  "esc:cmd": S.op("hint")
});
