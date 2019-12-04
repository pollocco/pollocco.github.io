function initMap() {
    var frontida = {lat: 40.018578, lng: -75.093307};
    var home = {lat: 41.585891, lng: -93.625095};
    var temple = {lat: 39.981121, lng:  -75.155384};
    var osu = {lat: 44.563575, lng: -123.279482};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: home
    });
    
  
    var frontidaString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h5>Frontida BioPharm</h5>'+
        '<h6>2017-2018</h6>' +
        '<div id="bodyContent">'+
        '<p><b>AR&D Technician:</b> Worked with analysts to assist in R&D activities ' +
        'including staging and analyzing samples under HPLC. '+
        'Responsible for tracking and managing inventory. Corresponded with all '+
        'levels of staff to prioritize the needs of the AR&D department.'+
        '</p>' +
        '</div>'+
        '</div>';
        
     var templeString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h5>Temple University</h5>'+
        '<h6>2011-2016</h6>' +
        '<div id="bodyContent">'+
        '<p><b>Bachelor of Science Degree in Geology</b></p>' +
        'Member of the Temple University Mock Trial Association.</p>' +
        '</div>'+
        '</div>';
        
    var homeString = '<div id="content">' +
         '<div id="siteNotice">'+
        '</div>'+
        '<h5>Home:</h5>'+
        '<div id="bodyContent">'+
        'Currently lives in Des Moines, IA. <br></br>' +
        '<h5>Self Employed: </h5>' +
        '<h6>2019-Present</h6>' +
        '<p>Contract work involving "human-in-the-loop" type assessment of content ' +
        'for machine learning applications. Tasks include tagging/categorization of media ' +
        'for ground truth modeling as well as pre-deployment quality assurance checks.</p>' +
        '</div>'+
        '</div>';
        
    var osuString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h5 id="firstHeading" class="firstHeading">Oregon State University</h5>'+
        '<h6>2019-Present</h6>' +
        '<div id="bodyContent">'+
        '<p><b>Post-Baccalaureate Double Degree Program, B.S. Computer Science</b></p>' +
        'Go Beavs!</p>' +
        '</div>'+
        '</div>';
        
    var templeIcon = {
      url: 'assets/img/templet.png', // url
      scaledSize: new google.maps.Size(25, 25),
      origin: new google.maps.Point(0,0),
      anchor: new google.maps.Point(25, 25)
      };
    
    var osuIcon = {
        url: 'assets/img/osubeavs.png',
      scaledSize: new google.maps.Size(50, 50),
      origin: new google.maps.Point(0,0), 
      anchor: new google.maps.Point(0, 0)
    }
    
    var osuInfoWindow = new google.maps.InfoWindow({
      content: osuString
    });
  
    var osuMarker = new google.maps.Marker({
      position: osu,
      map: map,
      icon: osuIcon,
      title: 'Oregon State University'
    });
    
    osuMarker.addListener('click', function() {
      osuInfoWindow.open(map, osuMarker);
      frontidaInfoWindow.close(map, frontidaMarker);
      homeInfoWindow.close(map, homeMarker);
      templeInfoWindow.close(map, homeMarker);
    });
  
    var templeInfoWindow = new google.maps.InfoWindow({
      content: templeString
    });
  
    var templeMarker = new google.maps.Marker({
      position: temple,
      map: map,
      icon: templeIcon,
      title: 'Temple University'
    });
    
    templeMarker.addListener('click', function() {
      templeInfoWindow.open(map, templeMarker);
      frontidaInfoWindow.close(map, frontidaMarker);
      homeInfoWindow.close(map, homeMarker);
      osuInfoWindow.close(map, osuMarker);
    });
    
        
    var homeInfoWindow = new google.maps.InfoWindow({
      content: homeString
    });
  
    var homeMarker = new google.maps.Marker({
      position: home,
      map: map,
      icon: 'http://maps.google.com/mapfiles/kml/pal3/icon56.png',
      title: 'Home'
    });
    
    homeMarker.addListener('click', function() {
      homeInfoWindow.open(map, homeMarker);
      templeInfoWindow.close(map, homeMarker);
      frontidaInfoWindow.close(map, frontidaMarker);
      osuInfoWindow.close(map, osuMarker);
    });
    
    var frontidaInfoWindow = new google.maps.InfoWindow({
      content: frontidaString
    });
  
    var frontidaMarker = new google.maps.Marker({
      position: frontida,
      map: map,
      icon: 'http://maps.google.com/mapfiles/kml/pal4/icon8.png',
      title: 'Frontida BioPharm'
    });
    
    frontidaMarker.addListener('click', function() {
      frontidaInfoWindow.open(map, frontidaMarker);
      templeInfoWindow.close(map, homeMarker);
      homeInfoWindow.close(map, homeMarker);
      osuInfoWindow.close(map, osuMarker);
    });
  }