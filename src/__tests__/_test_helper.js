window.isArrayPassFunction = function(source, fn) {
  if(Array.isArray(source)) {
    return source.map(function(userAgent){
      return fn(userAgent);
    }).every(Boolean);
  } else {
    return fn(source);
  }
};
