(function () {

  var script = document.getElementById("narabannerjs");
  try {
    var url = new URL(script.getAttribute("src"))
    url = url.href;
  }
  catch (err) {
    url = script.getAttribute("src");
  }

  
  url = url.replace(/(.*\/).*/, '$1');  

  //document.addEventListener("DOMContentLoaded",function(){
  var d = new Date();
  var v = d.getTime();
  v=0.2;
  
  loadcssfile(url + 'top-banner-na.css?v=' + v);
  loadcssfile('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  
  var isNaraMenuloaded = false;
  window.addEventListener('load', function () {
      // add nara-menu-bar tag        
      loadNaraMenu();
  });
  // check to make sure web component tag is load in case GTM is loading slow and missed window load trigger
  
  if(document.getElementsByTagName("body")[0] && !isNaraMenuloaded){
      loadNaraMenu();
  }

  function loadNaraMenu() {
    if(isNaraMenuloaded) return;
    isNaraMenuloaded = true;

    var style = document.createElement("style")
    var css = document.createTextNode(".banner-nara-mxg{display:none} .nara-content-mxg{display:none;}");
    style.appendChild(css);
    document.getElementsByTagName("head")[0].appendChild(style);
    
    var ie=false;
    var div = document.createElement('div');
    var banner_mxg = document.createElement('div')
    var mxg_content = document.createElement('div')
    

    var div_content = document.createElement('div');
    var div_bg = document.createElement('div');
    var att = document.createAttribute("id");
    att.value = "narabanner";
    div.setAttributeNode(att);
    var att = document.createAttribute("class");
    att.value = window.location.hostname.replace(/(www|gov)/, '').replace(/[aoeiu.]/gi, '');
    div.setAttributeNode(att);

    var style = document.createElement("style")
    var css = document.createTextNode(".banner-nara-mxg{display:none}");
    style.appendChild(css);
    document.getElementsByTagName("head")[0].appendChild(style);

    var banner_mxg_att = document.createAttribute("class");    
    banner_mxg_att.value = 'banner-nara-mxg';
    banner_mxg.setAttributeNode(banner_mxg_att);
    div.appendChild(banner_mxg);

    banner_mxg.innerHTML = '<a href="https://www.archives.gov"><img class="nara-logo-mxg" src="' + url + 'nara-eagle-logo-branding2.svg" alt="USA National Archives"></a> <a class="collapsible-mxg" href="#nara_banner_content">Explore our Websites</a>';

    
   
    mxg_content.setAttribute('class','nara-content-mxg');
    mxg_content.innerHTML = '<a href="#" class="nara-banner-close-btn"><img src="' + url + '/close.png" alt="close" style="width:25px" class="nara-banner-close-icon"></a>';
    mxg_content.innerHTML += '<div id="nara_banner_content"> <div class="nara-grid-mxg"><div class="nara-container-mxg"> <p><b class="title-mxg">Main Website</b></p> <ul> <li><a href="https://www.archives.gov/">National Archives</a></li> </ul> <p><b class="title-mxg">Visit Us</b></p> <ul> <li><a href="https://museum.archives.gov/">National Archives Museum</a></li> <li><a href="https://www.archives.gov/locations">See All Locations</a></li> </ul> </div> <div class="nara-container-mxg"> <p><b class="title-mxg">For Research</b></p> <ul> <li><a href="https://catalog.archives.gov/">Catalog</a></li> <li><a href="https://historyhub.history.gov/">History Hub</a></li> <li><a href="https://1940census.archives.gov/">1940 Census</a></li> <li><a href="https://founders.archives.gov/">Founders Online</a></li> </ul> <p><b class="title-mxg">For Teachers</b></p> <ul> <li><a href="https://www.docsteach.org/">DocsTeach</a></li> <li><a href="https://www.ourdocuments.gov/">Our Documents</a></li> </ul> </div> <div class="nara-container-mxg"> <p><b class="title-mxg">Presidential Libraries</b></p> <ul> <li><a href="https://hoover.archives.gov/">Herbert Hoover Library and Museum</a></li> <li><a href="https://www.fdrlibrary.org/">Franklin D. Roosevelt Library and Museum</a></li> <li><a href="https://www.trumanlibrary.gov/">Harry S. Truman Library and Museum</a></li> <li><a href="https://www.eisenhowerlibrary.gov/">Dwight D. Eisenhower Library and Museum</a></li> <li><a href="https://jfklibrary.archives.gov">John F. Kennedy Library and Museum</a></li> <li><a href="https://lbjlibrary.archives.gov">Lyndon B. Johnson Library and Museum</a></li> <li><a href="https://www.nixonlibrary.gov/">Richard Nixon Library and Museum</a></li><li><a href="https://www.fordlibrarymuseum.gov/">Gerald R. Ford Library and Museum</a></li></ul> </div> <div class="nara-container-mxg"> <ul><li><a href="https://www.jimmycarterlibrary.gov/">Jimmy Carter Library and Museum</a></li> <li><a href="https://www.reaganlibrary.gov/">Ronald Reagan Library and Museum</a></li> <li><a href="https://bush41library.archives.gov">George Bush Library and Museum</a></li> <li><a href="https://www.clintonlibrary.gov/">William J. Clinton Library and Museum</a></li> <li><a href="https://georgewbushlibrary.smu.edu/">George W. Bush Library and Museum</a></li> <li><a href="https://www.obamalibrary.gov/">Barack Obama Library</a></li><li><a href="https://www.trumplibrary.gov/">Donald J. Trump Library</a></li></ul> </div> </div> </div>';
    
    div_content.setAttribute('id', 'nara_banner_modal');
    div_content.setAttribute('class', 'collapsible-mxg');
    

    var body_element = document.getElementsByTagName("body")[0];
    var body_class = body_element.getAttribute("class");
    body_class = body_class ? body_class + ' nara-branding-bar nara-branding-bar-collapsed' : 'nara-branding-bar nara-branding-bar-collapsed';

    if(navigator.userAgent.indexOf('MSIE')!==-1
    || navigator.appVersion.indexOf('Trident/') > -1){
      ie=true;
      body_class += ' nara-branding-bar-ie';
    }

    body_element.setAttribute('class', body_class);

    div_bg.setAttribute('id', 'nara_banner_modal_bg');
    div_bg.setAttribute('class', 'collapsible-mxg');

    //body_element.appendChild(div_content);
    div_content.appendChild(mxg_content);

    function insertAfter(el, referenceNode) {
      referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
    }

    var first_atag = document.getElementsByTagName("a")[0];
    var firstdiv = document.getElementsByTagName("div")[0];
    body_element.appendChild(div_content, document.body.children[0]);
    body_element.appendChild(div_bg, div_content);
    




    if (window.location.hostname.match(/^(dev[467].drupal.drupalme.net|www.obamalibrary.gov|hoover.archives.gov)/) ||
      window.location.pathname.match(/^\/(www.obamalibrary.gov|hoover.archives.gov)/)
    ) {
      //var insertdiv = document.getElementById("header");
      var insertdiv = document.getElementById("header");
      if (!insertdiv) {
        return;
      }
      body_element.setAttribute('class', body_class + ' nara-banner-obhv');
      att.value += ' narabanner-obhv';
      insertdiv.insertBefore(div, insertdiv.firstChild);
      //insertdiv.parentNode.insertBefore(div, insertdiv);
    }
    else if (window.location.hostname.match(/^(dev13.drupal|eisenhower)/)) {      
      if(first_atag && first_atag.getAttribute('href').match(/^#/)){             
        insertAfter(div,first_atag);
      }
      else{
        body_element.insertBefore(div, firstdiv);
      }

      att.value += ' narabanner-eisenhower';

      //body_class = body_class ? body_class + ' nara-branding-bar' : 'nara-branding-bar';
      body_element.setAttribute('class', body_class + ' eisenhowerlib');
    }

    else if (window.location.hostname.match(/^(dev12.drupalme|nixonlibrary)/)) {      
      if(first_atag && first_atag.getAttribute('href').match(/^#/)){             
        insertAfter(div,first_atag);
      }
      else{
        body_element.insertBefore(div, firstdiv);
      }

      att.value += ' narabanner-nixonlib';

      //body_class = body_class ? body_class + ' nara-branding-bar' : 'nara-branding-bar';
      body_element.setAttribute('class', body_class + ' nixonlib');
    }

    else if (window.location.hostname.match(/trumanlibrary.org/) || window.location.pathname.match(/^\/(www.trumanlibrary.org)/)) {
      if(first_atag && first_atag.getAttribute('href').match(/^#/)){             
        insertAfter(div,first_atag);
      }
      else{
        body_element.insertBefore(div, firstdiv);
      }
      att.value += ' narabanner-trumanlibrary';
    }
    else if (window.location.hostname.match(/(dev9.drupal.drupalme.net|reaganlibrary.gov)/) || window.location.pathname.match(/^\/(www.reaganlibrary.gov)/)) {
      
      if(first_atag && first_atag.getAttribute('href').match(/^#/)){             
        insertAfter(div,first_atag);
      }
      else{
        body_element.insertBefore(div, firstdiv);
      }
      att.value += ' narabanner-reaganlib';
      
    }

    else if (window.location.pathname.match(/^\/(www.fordlibrarymuseum.gov)/)) {
      if(first_atag && first_atag.getAttribute('href').match(/^#/)){             
        insertAfter(div,first_atag);
      }
      else{
        body_element.insertBefore(div, firstdiv);
      }
      att.value += ' narabanner-fordlibrary';
    }
    else if (window.location.pathname.match(/^\/(www.georgewbushlibrary.smu.edu)/)) {
      if(first_atag && first_atag.getAttribute('href').match(/^#/)){             
        insertAfter(div,first_atag);
      }
      else{
        body_element.insertBefore(div, firstdiv);
      }
      att.value += ' narabanner-georgewbushlibrary';
    }
    else if (window.location.pathname.match(/^\/(www.trumanlibrary.org)/)) {
      if(first_atag && first_atag.getAttribute('href').match(/^#/)){             
        insertAfter(div,first_atag);
      }
      else{
        body_element.insertBefore(div, firstdiv);
      }
      att.value += ' narabanner-trumanlibrary';
    }
    else if (window.location.hostname.match(/(museum.archives.gov|dev6.drupalme.net)/)) {
      if(first_atag && first_atag.getAttribute('href').match(/^#/)){      
        insertAfter(div,first_atag);
      }
      else{
        body_element.insertBefore(div, firstdiv);
      }
      att.value += ' archivesmuseum';
    }
    /*
    else if (window.location.hostname.match(/www.clintonlibrary.gov/)) {
      var cinsertdiv = document.getElementById("main-header");      
      if(cinsertdiv){            
        
        body_element.insertBefore(div,cinsertdiv);
      
      }
      
    }
    */
    else if (window.location.hostname.match(/georgewbushlibrary.smu.edu/)) {      
      if(first_atag && first_atag.getAttribute('href').match(/^#/)){              
        insertAfter(div,first_atag);
      }
      else{
        body_element.insertBefore(div, firstdiv);
      }      
    }
    else {                     
      if(first_atag && first_atag.getAttribute('href').match(/^#/)){              
        insertAfter(div,first_atag);        
      }
      else{
        body_element.insertBefore(div, firstdiv);
      }
    
    }


    var coll = document.getElementsByClassName("collapsible-mxg");
    var i;

    for (i = 0; i < coll.length; i++) {      
      
      coll[i].addEventListener("click", function (event) {
        
        //this.classList.toggle("active-mxg");
        //var content = this.nextElementSibling;
        var content = div_content;        
        if (content.style.display === "block") {
          
          //ignore link click          
          if (event.target.tagName == 'A') {            
            return;
          }
          content.style.display = "none";          
          

          var body_element = document.getElementsByTagName("body")[0];
          var body_class = body_element.getAttribute("class");
          body_element.setAttribute('class', body_class.replace('nara-branding-expanded', 'nara-branding-bar-collapsed'));

          //show original menu content
          document.getElementById('nara_banner_content').removeAttribute('class');
        }
        //show pop up menu
        else{                     
          content.style.display = "block";
          //var att = document.createAttribute("class");
          
          //banner_mxg.setAttribute('class','expanded');
          var body_element = document.getElementsByTagName("body")[0];
          var body_class = body_element.getAttribute("class");          
          body_element.setAttribute('class', body_class.replace('nara-branding-bar-collapsed', 'nara-branding-expanded'));
          $('.nara_banner_content a:first-child').focus();
          event.preventDefault();
          
        }
      });
    }

  }

  function loadcssfile(filename) {
    var fileref = document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", filename);

    if (typeof fileref != "undefined")
      document.getElementsByTagName("head")[0].appendChild(fileref);

  }

  //  });
}());
