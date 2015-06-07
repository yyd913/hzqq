/*
 * a simple plugin of javascript
 * by hzqq
 * 2015-6-7
 */
;(function(window){
	var hzqq = {};
	hzqq.name = "hzqq";
	hzqq.version = "1.0.0";
	var _$hzqq = window.$hzqq;
	
	/*
	 * public function ...
	 */
	hzqq.noConflict = function(name){
		window.$hzqq = _$hzqq;
		window[name] = hzqq;
	}
	
	/*
	 * private function ...
	 */
	
	window.$hzqq = hzqq;
})(window);
