function initMap() {
	var myCoords = {lat: 53.60647, lng: 9.4743513};
	
	if ($(window).width() < 800) {
		var zv = 14;
		var myIcon = root+'img/icons/location_red_small.png';
	} else {
		var zv = 16;
		var myIcon = root+'img/icons/location_red.png';
	}
	var styledMap = new google.maps.StyledMapType(styles,{
	name: "Styled Map"});	
	
	var map = new google.maps.Map(document.getElementById('google-map'), {
		center: myCoords,
		zoom: zv,
		disableDefaultUI: true,
		scrollwheel: false,
		mapTypeControlOptions: {
		mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
		}
	});
	
	var marker = new google.maps.Marker({
		position: myCoords,
		map: map,
		icon: myIcon,
		title: 'Alter Schlachhof Stade'
	});
	
	//Associate the styled map with the MapTypeId and set it to display.
	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');
}