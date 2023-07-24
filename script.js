
setTimeout(() => {
  const box = document.getElementById('PageLoad');
  box.remove();
}, 12000);

function scrolldiv() {
  var elem = document.getElementById("logo-board");
  elem.scrollIntoView();
}

/*tos button*/
function tos(id) {
  var divelement = document.getElementById(id);
  var divelement2 = document.getElementById("logoscroll");
  
  if(divelement.style.display === 'none')
    {
    divelement.style.display = 'block';
    divelement2.style.display = 'none';
    }
  else
    {
    divelement.style.display = 'none';
    divelement2.style.display = 'block';
    }
}


let first = document.getElementById('discord'),
    sec = document.getElementById('sec-contact'),
    third = document.getElementById('ko-fi');
    fourth = document.getElementById('email');
    fifth = document.getElementById('youtube');
    sixth = document.getElementById('itch-io');
    seventh = document.getElementById('gamedev');
    eighth = document.getElementById('twitter');
    ninth = document.getElementById('inprnt');
    tenth = document.getElementById('instagram');
    

first.onmouseover = () => {
  sec.style.background = '#2c1c41a4';
}

first.onmouseleave = () => {
  sec.style.background = '#1b1b1bb9';  
}

//////////////

third.onmouseover = () => {
  sec.style.background = 'rgba(19, 52, 68, 0.548)';
}

third.onmouseleave = () => {
  sec.style.background = '#1b1b1bb9';  
}

//////////////

fourth.onmouseover = () => {
  sec.style.background = '#242f30a2';
}

fourth.onmouseleave = () => {
  sec.style.background = '#1b1b1bb9';  
}

//////////////

fifth.onmouseover = () => {
  sec.style.background = '#5c1d1d7e';
}

fifth.onmouseleave = () => {
  sec.style.background = '#1b1b1bb9';  
}

/////////////

sixth.onmouseover = () => {
  sec.style.background = '#153a1aa4';
}

sixth.onmouseleave = () => {
  sec.style.background = '#1b1b1bb9';  
}

////////////

seventh.onmouseover = () => {
  sec.style.background = '#0f0f0fb9';
}

seventh.onmouseleave = () => {
  sec.style.background = '#1b1b1bb9';  
}

////////////

eighth.onmouseover = () => {
  sec.style.background = '#0a2a44bd';
}

eighth.onmouseleave = () => {
  sec.style.background = '#1b1b1bb9';  
}

////////////

ninth.onmouseover = () => {
  sec.style.background = '#113511c9';
}

ninth.onmouseleave = () => {
  sec.style.background = '#1b1b1bb9';  
}

///////////

tenth.onmouseover = () => {
  sec.style.background = '#42163ba2';
}

tenth.onmouseleave = () => {
  sec.style.background = '#1b1b1bb9';  
}


/*stars*/

 /**
  * 
  * @param {type} x position
  * @param {type} y position
  * @param {type} r radius
  * @param {type} b brightness
  * @param {type} c colour
  */
 Star = function(x, y, r, b, c) {
  //
  this.x = x;
  this.y = y;
  this.radius = r;
  this.brightness = b;
  this.fillStyle = c;
  //
  this.arcRad = Math.PI * 2;
};


/**
 */
Star.prototype.draw = function(context) {
  //draw the star
  context.beginPath();
  context.globalAlpha = this.brightness;
  context.fillStyle = this.fillStyle;
  context.arc(this.x, this.y, this.radius, 0, this.arcRad, true);
  context.fill();
  context.closePath();
};

/**
 * 
 * @param {type} canvas
 * @param {type} numStars
 * @param {type} colours
 * @param {type} twinkleSpeed
 */
StarField = function(canvas, numStars, colours, twinkleSpeed) {
  this.context = canvas.getContext('2d'),
    this.w = canvas.width,
    this.h = canvas.height,
    this.numStars = numStars,
    this.stars = [],
    this.colours = colours,
    this.numColours = colours.length,
    this.count = 0,
    this.alter = twinkleSpeed;
  //
  this.create();
  this.draw();
};

/**
 * 
 */
StarField.prototype.create = function() {

  this.context.save();
  //
  for (var i = 0; i < this.numStars; i++) {
    //
    var x = Math.random() * this.w | 0,
      y = Math.random() * this.h | 0,
      r = Math.round((Math.random()) * 100) * 0.01,
      b = this.randomBetween(80, 100) * 0.01,
      c = this.colours[this.randomBetween(0, this.numColours)];
    //
    var s = new Star(x, y, r, b, c);
    this.stars.push(s);
    s.draw(this.context);
  }

  this.context.restore();
};

/**
 * @param {type} min
 * @param {type} max
 * @returns {Number}
 */
StarField.prototype.randomBetween = function(min, max) {
    return Math.round((Math.random() * max - min) + min);
  }
  /**
   * 
   * @param {type} array
   * @returns shuffled array
   */
StarField.prototype.shuffle = function(array) {
  var counter = array.length,
    temp, index;

  while (counter > 0) {
    index = Math.floor(Math.random() * counter);

    counter--;

    temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}


StarField.prototype.draw = function() {
  this.alterBrightness();
  this.context.clearRect(0, 0, this.w, this.h);
  //
  for (var i = 0; i < this.numStars; i++) {
    var s = this.stars[i];
    s.draw(this.context);
  }
  //
  window.requestAnimationFrame(this.draw.bind(this));
};

/**
 * alter the brighness of selected stars
 */
StarField.prototype.alterBrightness = function() {
  for (var i = this.count; i < this.alter; i++) {
    var s = this.stars[i];
    s.brightness = this.randomBetween(80, 100) * 0.01;
  }
  //
  this.count += this.alter;
  if (this.count >= this.numStars) {
    this.count = 0;
    this.shuffle(this.stars);
  }
};

var sf = new StarField(document.getElementById("star_field"), 1000, ["#f8f7ff", "#9bb0ff", "#ffcc6f", "#cad7ff"], 70);


( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'jquery-bridget/jquery-bridget',[ 'jquery' ], function( jQuery ) {
      return factory( window, jQuery );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('jquery')
    );
  } else {
    // browser global
    window.jQueryBridget = factory(
      window,
      window.jQuery
    );
  }

}( window, function factory( window, jQuery ) {
'use strict';

// ----- utils ----- //

var arraySlice = Array.prototype.slice;

// helper function for logging errors
// $.error breaks jQuery chaining
var console = window.console;
var logError = typeof console == 'undefined' ? function() {} :
  function( message ) {
    console.error( message );
  };

// ----- jQueryBridget ----- //

function jQueryBridget( namespace, PluginClass, $ ) {
  $ = $ || jQuery || window.jQuery;
  if ( !$ ) {
    return;
  }

  // add option method -> $().plugin('option', {...})
  if ( !PluginClass.prototype.option ) {
    // option setter
    PluginClass.prototype.option = function( opts ) {
      // bail out if not an object
      if ( !$.isPlainObject( opts ) ){
        return;
      }
      this.options = $.extend( true, this.options, opts );
    };
  }

  // make jQuery plugin
  $.fn[ namespace ] = function( arg0 /*, arg1 */ ) {
    if ( typeof arg0 == 'string' ) {
      // method call $().plugin( 'methodName', { options } )
      // shift arguments by 1
      var args = arraySlice.call( arguments, 1 );
      return methodCall( this, arg0, args );
    }
    // just $().plugin({ options })
    plainCall( this, arg0 );
    return this;
  };

  // $().plugin('methodName')
  function methodCall( $elems, methodName, args ) {
    var returnValue;
    var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';

    $elems.each( function( i, elem ) {
      // get instance
      var instance = $.data( elem, namespace );
      if ( !instance ) {
        logError( namespace + ' not initialized. Cannot call methods, i.e. ' +
          pluginMethodStr );
        return;
      }

      var method = instance[ methodName ];
      if ( !method || methodName.charAt(0) == '_' ) {
        logError( pluginMethodStr + ' is not a valid method' );
        return;
      }

      // apply method, get return value
      var value = method.apply( instance, args );
      // set return value if value is returned, use only first value
      returnValue = returnValue === undefined ? value : returnValue;
    });

    return returnValue !== undefined ? returnValue : $elems;
  }

  function plainCall( $elems, options ) {
    $elems.each( function( i, elem ) {
      var instance = $.data( elem, namespace );
      if ( instance ) {
        // set options & init
        instance.option( options );
        instance._init();
      } else {
        // initialize new instance
        instance = new PluginClass( elem, options );
        $.data( elem, namespace, instance );
      }
    });
  }

  updateJQuery( $ );

}

// ----- updateJQuery ----- //

// set $.bridget for v1 backwards compatibility
function updateJQuery( $ ) {
  if ( !$ || ( $ && $.bridget ) ) {
    return;
  }
  $.bridget = jQueryBridget;
}

updateJQuery( jQuery || window.jQuery );

// -----  ----- //

return jQueryBridget;

}));


( function( global, factory ) {

  if ( typeof define == 'function' && define.amd ) {

    define( 'ev-emitter/ev-emitter',factory );
  } else if ( typeof module == 'object' && module.exports ) {

    module.exports = factory();
  } else {

    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {



function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var i = 0;
  var listener = listeners[i];
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  while ( listener ) {
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
    // get next listener
    i += isOnce ? 0 : 1;
    listener = listeners[i];
  }

  return this;
};

return EvEmitter;

}));
