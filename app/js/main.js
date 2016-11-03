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
  return DetectRTC.load(function () {
    // console.dir(DetectRTC)
    if (!listPresent || list.indexOf("hasWebcam".toLowerCase()) != -1)
      result["hasWebcam"] = DetectRTC.hasWebcam
    if (!listPresent || list.indexOf("hasMicrophone".toLowerCase()) != -1)
      result["hasMicrophone"] = DetectRTC.hasMicrophone

    if (!listPresent || list.indexOf("hasSpeakers".toLowerCase()) != -1)
      result["hasSpeakers"] = DetectRTC.hasSpeakers
    if (!listPresent || list.indexOf("isScreenCapturingSupported".toLowerCase()) != -1)
      result["isScreenCapturingSupported"] = DetectRTC.isScreenCapturingSupported
    if (!listPresent || list.indexOf("isSctpDataChannelsSupported".toLowerCase()) != -1)
      result["isSctpDataChannelsSupported"] = DetectRTC.isSctpDataChannelsSupported

    if (!listPresent || list.indexOf("isRtpDataChannelsSupported".toLowerCase()) != -1)
      result["isRtpDataChannelsSupported"] = DetectRTC.isRtpDataChannelsSupported
    if (!listPresent || list.indexOf("isAudioContextSupported".toLowerCase()) != -1)
      result["isAudioContextSupported"] = DetectRTC.isAudioContextSupported
    if (!listPresent || list.indexOf("isWebRTCSupported".toLowerCase()) != -1)
      result["isWebRTCSupported"] = DetectRTC.isWebRTCSupported

    if (!listPresent || list.indexOf("isDesktopCapturingSupported".toLowerCase()) != -1)
      result["isDesktopCapturingSupported"] = DetectRTC.isDesktopCapturingSupported
    if (!listPresent || list.indexOf("isMobileDevice".toLowerCase()) != -1)
      result["isMobileDevice"] = DetectRTC.isMobileDevice

    if (!listPresent || list.indexOf("isWebSocketsSupported".toLowerCase()) != -1)
      result["isWebSocketsSupported"] = DetectRTC.isWebSocketsSupported
    if (!listPresent || list.indexOf("isWebSocketsBlocked".toLowerCase()) != -1)
      result["isWebSocketsBlocked"] = DetectRTC.isWebSocketsBlocked
    if (!listPresent || list.indexOf("isWebSocketsBlocked".toLowerCase()) != -1 || list.indexOf("checkWebSocketsSupport".toLowerCase()) != -1)
      //DetectRTC.checkWebSocketsSupport(function(){
      result["isWebSocketsBlocked"] = DetectRTC.isWebSocketsBlocked
    // })

    if (!listPresent || list.indexOf("isWebsiteHasWebcamPermissions".toLowerCase()) != -1)
      result["isWebsiteHasWebcamPermissions"] = DetectRTC.isWebsiteHasWebcamPermissions
    if (!listPresent || list.indexOf("isWebsiteHasMicrophonePermissions".toLowerCase()) != -1)
      result["isWebsiteHasMicrophonePermissions"] = DetectRTC.isWebsiteHasMicrophonePermissions

    if (!listPresent || list.indexOf("audioInputDevices".toLowerCase()) != -1)
      result["audioInputDevices"] = DetectRTC.audioInputDevices
    if (!listPresent || list.indexOf("audioOutputDevices".toLowerCase()) != -1)
      result["audioOutputDevices"] = DetectRTC.audioOutputDevices
    if (!listPresent || list.indexOf("videoInputDevices".toLowerCase()) != -1)
      result["videoInputDevices"] = DetectRTC.videoInputDevices

    if (!listPresent || list.indexOf("osName".toLowerCase()) != -1)
      result["osName"] = DetectRTC.osName
    if (!listPresent || list.indexOf("osVersion".toLowerCase()) != -1)
      result["osVersion"] = DetectRTC.osVersion

    if (!listPresent || list.indexOf("browser".toLowerCase()) != -1)
      result["browser"] = DetectRTC.browser

    if (!listPresent || list.indexOf("isCanvasSupportsStreamCapturing".toLowerCase()) != -1)
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








//calling the main function with arguments
//this is totally an asynchronous operation
//must have a callback
//
//both works
//detect_features(listToCheck, callback)
//detect_features(callback)
detect_features(
    function (result) {
      //console.log("Result:", result)
      document.getElementById("browser-features").innerHTML = "<pre><code>" + JSON.stringify(result, undefined, 2) + "</code></pre>";

      $.ajax({
        url: "/process_features",
        method: "GET",
        data: JSON.parse(result),
        success: function (result) {
          alert("Response from server:" + result);
        }
      });

    });

