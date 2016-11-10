//document.write('<script src="https://cdn.webrtc-experiment.com/DetectRTC.js"> </script>');
var detect_features = function (list, callback) {
  var listPresent = true;
  var result = {};
  if (typeof list == 'function') {
    callback = list;
  }
  if (!list || typeof list != 'object' || !list.length) {
    listPresent = false;
    list = [];
  }

  if (!callback) {
    callback = function (result) {
      return result;
    }
  }
  if (list.length > 0) {
    for (var i = 0; i < list.length; i++) {
      if (Modernizr.hasOwnProperty(list[i])) {
        result[list[i]] = Modernizr[list[i]];
      }
    }
  }
  if (!listPresent) {
    for (var i in Modernizr) {
      if (Modernizr.hasOwnProperty(i)) {
        result[i] = Modernizr[i];
      }
    }
  }
  return DetectRTC.load(function () {
   console.log("===",list.indexOf("hasWebcam"))
    if (!listPresent || list.indexOf("hasWebcam") != -1)
      result["hasWebcam"] = DetectRTC.hasWebcam
    if (!listPresent || list.indexOf("hasMicrophone") != -1)
      result["hasMicrophone"] = DetectRTC.hasMicrophone

    if (!listPresent || list.indexOf("hasSpeakers") != -1)
      result["hasSpeakers"] = DetectRTC.hasSpeakers
    if (!listPresent || list.indexOf("isScreenCapturingSupported") != -1)
      result["isScreenCapturingSupported"] = DetectRTC.isScreenCapturingSupported
    if (!listPresent || list.indexOf("isSctpDataChannelsSupported") != -1)
      result["isSctpDataChannelsSupported"] = DetectRTC.isSctpDataChannelsSupported

    if (!listPresent || list.indexOf("isRtpDataChannelsSupported") != -1)
      result["isRtpDataChannelsSupported"] = DetectRTC.isRtpDataChannelsSupported
    if (!listPresent || list.indexOf("isAudioContextSupported") != -1)
      result["isAudioContextSupported"] = DetectRTC.isAudioContextSupported
    if (!listPresent || list.indexOf("isWebRTCSupported") != -1)
      result["isWebRTCSupported"] = DetectRTC.isWebRTCSupported

    if (!listPresent || list.indexOf("isDesktopCapturingSupported") != -1)
      result["isDesktopCapturingSupported"] = DetectRTC.isDesktopCapturingSupported
    if (!listPresent || list.indexOf("isMobileDevice") != -1)
      result["isMobileDevice"] = DetectRTC.isMobileDevice

    if (!listPresent || list.indexOf("isWebSocketsSupported") != -1)
      result["isWebSocketsSupported"] = DetectRTC.isWebSocketsSupported
    if (!listPresent || list.indexOf("isWebSocketsBlocked") != -1)
      result["isWebSocketsBlocked"] = DetectRTC.isWebSocketsBlocked
    if (!listPresent || list.indexOf("isWebSocketsBlocked") != -1 || list.indexOf("checkWebSocketsSupport") != -1)
      //DetectRTC.checkWebSocketsSupport(function(){
      result["isWebSocketsBlocked"] = DetectRTC.isWebSocketsBlocked
    // })

    if (!listPresent || list.indexOf("isWebsiteHasWebcamPermissions") != -1)
      result["isWebsiteHasWebcamPermissions"] = DetectRTC.isWebsiteHasWebcamPermissions
    if (!listPresent || list.indexOf("isWebsiteHasMicrophonePermissions") != -1)
      result["isWebsiteHasMicrophonePermissions"] = DetectRTC.isWebsiteHasMicrophonePermissions

    if (!listPresent || list.indexOf("audioInputDevices") != -1)
      result["audioInputDevices"] = DetectRTC.audioInputDevices
    if (!listPresent || list.indexOf("audioOutputDevices") != -1)
      result["audioOutputDevices"] = DetectRTC.audioOutputDevices
    if (!listPresent || list.indexOf("videoInputDevices") != -1)
      result["videoInputDevices"] = DetectRTC.videoInputDevices

    if (!listPresent || list.indexOf("osName") != -1)
      result["osName"] = DetectRTC.osName
    if (!listPresent || list.indexOf("osVersion") != -1)
      result["osVersion"] = DetectRTC.osVersion

    if (!listPresent || list.indexOf("browser") != -1)
      result["browser"] = DetectRTC.browser

    if (!listPresent || list.indexOf("isCanvasSupportsStreamCapturing") != -1)
      result["isCanvasSupportsStreamCapturing"] = DetectRTC.isCanvasSupportsStreamCapturing


    return callback(JSON.stringify(result));

  });



}

//list to check//must be an array of stings//
//not case sensitive
var listToCheck = [
  "hasWebcam",
  "hasMicrophone",
  "hasSpeakers",
  "isScreenCapturingSupported",
  "isSctpDataChannelsSupported",
  "isRtpDataChannelsSupported",
  "isAudioContextSupported",
  "isWebRTCSupported",
  "isDesktopCapturingSupported",
  "isMobileDevice",
  "isWebSocketsSupported",
  "isWebSocketsBlocked",
  "isWebsiteHasWebcamPermissions",
  "isWebsiteHasMicrophonePermissions",
  "audioInputDevices",
  "audioOutputDevices",
  "videoInputDevices",
  "osName",
  "osVersion",
  "browser",
  "isCanvasSupportsStreamCapturing",
  "isVideoSupportsStreamCapturing"

];

var featureListModernizr = ["htmlimports","input","inputtypes","applicationcache","blobconstructor","blob-constructor","cookies","cors","customprotocolhandler","customevent","dataview","eventlistener","geolocation","history","ie8compat","json","notification","postmessage","queryselector","serviceworker","svg","templatestrings","typedarrays","websockets","xdomainrequest","webaudio","cssescape","supports","target","microdata","mutationobserver","picture","es5array","es5date","es5function","es5object","strictmode","es5string","es5syntax","es5undefined","es5","es6array","es6collections","generators","es6math","es6number","es6object","promises","es6string","devicemotion","deviceorientation","filereader","beacon","lowbandwidth","eventsource","fetch","xhrresponsetype","xhr2","speechsynthesis","localstorage","sessionstorage","websqldatabase","svgfilters","urlparser","websocketsbinary","atobbtoa","atob-btoa","framed","sharedworkers","webworkers","contains","contextmenu","cssall","willchange","classlist","documentfragment","proximity","svgasimg","ambientlight","hashchange","inputsearchevent","pointerevents","audio","canvas","canvastext","contenteditable","emoji","olreversed","userdata","video","vml","webanimations","webgl","adownload","audioloop","canvasblending","todataurljpeg","todataurlpng","todataurlwebp","canvaswinding","bgpositionshorthand","csscalc","cubicbezierrange","cssgradients","multiplebgs","opacity","csspointerevents","csspositionsticky","regions","cssremunit","rgba","preserve3d","createelementattrs","createelement-attrs","dataset","hidden","bdi","outputelem","ruby","progressbar","meter","template","time","texttrackapi","track","unknownelements","capture","fileinput","fileinputdirectory","formattribute","placeholder","sandbox","seamless","srcdoc","imgcrossorigin","sizes","srcset","inputformaction","input-formaction","inputformenctype","input-formenctype","inputformmethod","inputformtarget","input-formtarget","scriptasync","scriptdefer","stylescoped","inlinesvg","textareamaxlength","videoloop","videopreload","webglextensions","flash","mediaqueries","hiddenscroll","mathml","touchevents","unicoderange","unicode","checked","displaytable","display-table","fontface","generatedcontent","hairline","cssinvalid","lastchild","nthchild","cssscrollbar","siblinggeneral","subpixelfont","cssvalid","cssvhunit","cssvwunit","details","oninput","formvalidation","datalistelem","localizednumber","csschunit","cssexunit","hsla","cssvmaxunit","cssvminunit","xhrresponsetypearraybuffer","xhrresponsetypeblob","xhrresponsetypedocument","xhrresponsetypejson","xhrresponsetypetext","svgclippaths","svgforeignobject","smil","textshadow","batteryapi","battery-api","crypto","dart","forcetouch","fullscreen","gamepads","indexeddb","intl","pagevisibility","performance","pointerlock","quotamanagement","requestanimationframe","raf","vibrate","webintents","lowbattery","getrandomvalues","backgroundblendmode","objectfit","object-fit","wrapflow","filesystem","requestautocomplete","speechrecognition","bloburls","transferables","getusermedia","peerconnection","datachannel","matchmedia","ligatures","cssanimations","csspseudoanimations","appearance","backdropfilter","backgroundcliptext","bgpositionxy","bgrepeatround","bgrepeatspace","backgroundsize","bgsizecover","borderimage","borderradius","boxshadow","boxsizing","csscolumns","displayrunin","display-runin","ellipsis","flexbox","flexboxlegacy","flexboxtweener","flexwrap","cssfilters","cssmask","overflowscrolling","cssreflections","cssresize","scrollsnappoints","shapes","textalignlast","csstransforms","csstransforms3d","csstransitions","csspseudotransitions","userselect"];






//calling the main function with arguments
//this is totally an asynchronous operation
//must have a callback
//
//both works
//detect_features(listToCheck, callback)
//detect_features(callback)
detect_features(
//  listToCheck, ////only for webrtc related features
//  featureListModernizr, ////only for modernizr:: html5 css3
//  listToCheck.concat(featureListModernizr), ////both features
    function (result) {
      //console.log("Result:", result)
      document.getElementById("browser-features").innerHTML = "<pre><code>" + JSON.stringify(result, undefined, 2) + "</code></pre>";

      $.ajax({
        url: "/process_features",
        method: "GET",
        data: JSON.parse(result),
        success: function (result) {
          alert("Response from server: " + result);
        }
      });

    });

