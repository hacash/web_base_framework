

function $id(id){
    return document.getElementById(id)
}



function getScrollTop() {  
    var scrollPos;  
    if (window.pageYOffset) {  
    scrollPos = window.pageYOffset; }  
    else if (document.compatMode && document.compatMode != 'BackCompat')  
    { scrollPos = document.documentElement.scrollTop; }  
    else if (document.body) { scrollPos = document.body.scrollTop; }   
    return scrollPos;   
} 


function tppl(tpl, data){
  var fn =  function(d) {
      var i, k = [], v = [];
      for (i in d) {
          k.push(i);
          v.push(d[i]);
      };
      return (new Function(k, fn.$)).apply(d, v);
  };
  if(!fn.$){
      var tpls = tpl.split('{:');
      fn.$ = "var $=''";
      for(var t = 0;t < tpls.length;t++){
          var p = tpls[t].split(':}');
          if(t!=0){
              fn.$ += '='==p[0].charAt(0)
                ? "+("+p[0].substr(1)+")"
                : ";"+p[0].replace(/\r\n/g, '')+"$=$"
          }
          // 支持 <pre> 和 [::] 包裹的 js 代码
          fn.$ += "+'"+p[p.length-1].replace(/\'/g,"\\'").replace(/\r\n/g, '\\n').replace(/\n/g, '\\n').replace(/\r/g, '\\n')+"'";
      }
      fn.$ += ";return $;";
      // log(fn.$);
  }
  return data ? fn(data) : fn;
}


function apicallex(r, okcall, errcall) {
    if( ! r.data ) {
        return errcall && errcall("cannot get data")
    }
    if( r.data.result > 0 ) {
        return errcall && errcall(r.data.message)
    }
    okcall && okcall(r.data.data)
}

function apiget(url, data, okcall, errcall) {
    axios
        .get(url, {
            params: data,
        })
        .then(function(r){
            apicallex(r, okcall, errcall)
        })
        .catch(errcall)
}


function apipost(url, data, okcall, errcall) {
    axios
        .post(url, data)
        .then(function(r){
            apicallex(r, okcall, errcall)
        })
        .catch(errcall)
}




