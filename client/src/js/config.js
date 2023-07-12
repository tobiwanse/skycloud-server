OLMap = null;
OLView = null;

DefaultDisplayUnits = "metric"; // metric, imperial, nautical
DefaultDisplayWindUnit = 'mps'; // mps, kt, kmph, mph
DefaultDisplayTempUnit = 'c'; // c, f, k
DefaultDisplayDistUnit = 'metric'; // metric, imperial, nautical
DefaultDisplayAltiUnit = 'metric'; // metric, imperial
DefaultDisplayWindType = 'int'; //interpolate winds

DefaultCenterLat = 20;
DefaultCenterLon = 0;
DefaultCompassCirclesCount = 3;
DefaultCompassCirclesBaseDistance = 0.5;
DefaultCompassCirclesInterval = 0.5;
DefaultZoomLvl = 0;
DefaultMapRotation = 0;
DefaultMapType = 'osm';
DefaultPointOfIntrest = null;
DefaultDisplaySidebar = false;
DefaultDisplaySelectedPanel = 'settings';
DefaultFilterWindsImperial = "1000,2000,3000,4000,5000,6000,7000,8000,9000,10000,11000,12000,13000,14000,15000,16000,17000,18000,19000,20000";
DefaultFilterWindsMetric = "300,600,900,1200,1500,1800,2100,2400,2700,3000,3300,3600,3900,4200,4500,4800,5100,5400,5700,6000";
DefaultDisplayZoomLvl = null;
DefaultDisplayLayers = 'poi';
DefaultPoiType = 'dz';

CenterLon = null;
CenterLat = null;

MapType = null;
MapRotation = null;

PoiType = null;

BaseLayers = null;
BaseOverLayers = null;
PoiLayers = null;
BaseLayerCollection = null;
OverLayerCollection = null;
PoiLayerCollection = null;

CompassFeatures = null;
POIMarkersFeatures = null;
WindsFeatures = null;
JumprunFeatures = null;

PointsOfIntrest = [];
PointOfIntrest = {};
SelectedPointOfIntrest = null;
Extent = [];
Winds = {};
Jumprun = {};

FilterWindsImperial = null;
FilterWindsMetric = null;

ZoomLvl = null;

DisplayUnits = null;
DisplayWindUnit = null;
DisplayTempUnit = null;
DisplayDistUnit = null;
DisplayAltiUnit = null;
DisplayWindType = null;
DisplaySidebar = false;
DisplaySelectedPanel = null;
DisplayZoomLvl = null;
DisplayLayers = null;

CompassCirclesCount = null;
CompassCirclesBaseDistance = null;
CompassCirclesInterval = null;
ColorByAlt = {
		// HSL for planes with unknown altitude:
		unknown : { h: 0,   s: 0,   l: 40 },

		// HSL for planes that are on the ground:
		ground  : { h: 15, s: 80, l: 20 },

		air : {
				// These define altitude-to-hue mappings
				// at particular altitudes; the hue
				// for intermediate altitudes that lie
				// between the provided altitudes is linearly
				// interpolated.
				//
				// Mappings must be provided in increasing
				// order of altitude.
				//
				// Altitudes below the first entry use the
				// hue of the first entry; altitudes above
				// the last entry use the hue of the last
				// entry.
				h: [ { alt: 2000,  val: 20 },    // orange
					 { alt: 10000, val: 140 },   // light green
					 { alt: 40000, val: 300 } ], // magenta
				s: 85,
				l: 50,
		},

		// Changes added to the color of the currently selected plane
		selected : { h: 0, s: -10, l: +20 },

		// Changes added to the color of planes that have stale position info
		stale :    { h: 0, s: -10, l: +30 },

		// Changes added to the color of planes that have positions from mlat
		mlat :     { h: 0, s: -10, l: -10 }
};

Icons = {
	standard:'<svg height="32px" width="32px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#FF6465;" d="M255.999,0C166.683,0,94.278,72.405,94.278,161.722c0,81.26,62.972,235.206,161.722,350.278 c98.75-115.071,161.722-269.018,161.722-350.278C417.722,72.405,345.316,0,255.999,0z"></path> <g style="opacity:0.1;"> <path d="M168.207,125.87c15.735-64.065,67.63-109.741,128.634-120.664C283.794,1.811,270.109,0,255.999,0 C166.683,0,94.277,72.405,94.277,161.722c0,73.715,51.824,207.247,135.167,317.311C170.39,349.158,150.032,199.872,168.207,125.87z "></path> </g> <path style="fill:#FFFFFF;" d="M255.999,235.715c-40.81,0-74.014-33.203-74.019-74.014c0.005-40.795,33.209-73.998,74.019-73.998 s74.014,33.203,74.019,74.014C330.015,202.513,296.809,235.715,255.999,235.715z"></path> </g></svg>',
	compass: '<i class="bi bi-compass fs-6"></i>',
	wind: '<i class="bi bi-wind fs-6"></i>',
	thermometer: '<i class="bi bi-thermometer-half"></i>',
	mountain: '<svg width="16" height="16" version="1.1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m8.7502 4.8685c-1.679 4.6163-1.7701 4.858-1.8203 4.7708-.028246-.051402-.60262-1.2299-1.271-2.6143-.67168-1.3895-1.2491-2.5835-1.29-2.6606l-.069062-.13895-2.1435 5.5886c-1.1801 3.0724-2.1499 5.6044-2.1561 5.6301-.0062041.025702.10041.15956.23216.29851l.24474.25728.06596-.16465c.037714-.092631.5587-1.4513 1.1611-3.0209.59951-1.5696 1.1079-2.882 1.1267-2.9179.025144-.046316.10351.13895.31706.75658.1569.45298.29192.82351.30123.82351.01257 0 .22906-.37052.48017-.82351.2542-.45298.4707-.82351.48016-.82351.00947 0 .24163.34991.51788.77719l.50221.77719.2542-.45298c.14123-.25219.33274-.59193.43004-.75658l.17257-.29342.36098.73596c.19772.40667.57747 1.1528.84115 1.6521.48017.9057.48017.9057.55233.81815.20392-.26772.36408-.50438.36408-.53517 0-.02061-.22596-.46824-.50221-.99833-.27625-.53008-.50221-.98307-.50221-1.0139 0-.04632 1.1989-3.4016 1.2491-3.4892.00621-.015529.21976.3293.4707.76166l.46139.78736.39233-.85938c.21665-.47333.408-.89552.42678-.94184.03135-.061844.13176.066929.62776.80289.32637.48377.60572.88508.62139.89552.01567.010173.16327-.28298.32327-.64842.16327-.37052.3138-.69982.33584-.73596.03135-.056489.32637.75122 1.6069 4.3847.85992 2.4496 1.5786 4.4516 1.5912 4.4567.034594 0 .49274-.43237.49274-.46824 0-.015529-.68425-1.971-1.5221-4.3486-.83804-2.3731-2.062-5.8518-2.7243-7.7251-.6591-1.8783-1.2083-3.4121-1.2176-3.4121-.009469 0-.816 2.1924-1.7858 4.8685zm2.5045-.93166c.37666 1.0757.70302 2.002.7218 2.0636.03135.092631.0062.16973-.16947.56623-.11298.25219-.21649.46316-.23233.47333-.02514.015529-.3169-.40131-1.1329-1.6261l-.08474-.12342-.41747.9057-.42057.9057-.26678-.4736c-.14759-.25728-.26367-.48886-.2604-.51456.031348-.16465 1.5316-4.2045 1.5504-4.1737.01257.020882.33274.92149.71249 1.9969zm-5.3605 5.167c-.00309.015529-.11298.22649-.248.46824l-.248.43237-1.0136-1.5798-.090939.14403c-.053387.082457-.23216.39622-.40163.70491-.16637.30359-.3138.55579-.32327.55579-.022042 0-.34204-.90061-.34204-.95201 0-.025702.62776-1.6778.99494-2.6143l.13812-.355.76898 1.5852c.42025.86955.76539 1.5953.76539 1.6106z" style="stroke-width:.0020907;stroke:color_stroke;fill:color_fill;"/></svg>',
	circle: '<svg width="10" height="10" version="1.1" viewBox="-2 -2 14 14" xmlns="http://www.w3.org/2000/svg"><g><path d="m9.8677 5a4.8677 4.8677 0 01-4.8677 4.8677 4.8677 4.8677 0 01-4.8677-4.8677 4.8677 4.8677 0 014.8677-4.8677 4.8677 4.8677 0 014.8677 4.8677z" style="fill:color_fill;paint-order:markers stroke fill;stroke-linecap:round;stroke-linejoin:round;stroke-width:3;stroke:color_stroke"/></g></svg>',
	arrow:'<svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-45.689 3.8806)"><path style="fill:color_fill; stroke:color_stroke; stroke-width:width_stroke;" d="m70.411-3.2703-24.474 47.134 24.474-19.796 23.862 19.325z"/></g></svg>',
	arrow2:'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path xmlns="http://www.w3.org/2000/svg" d="m26.934,28.641 -10,-26 c -0.327807,-0.8569693 -1.540193,-0.8569693 -1.868,0 l -10,26 C 4.7045353,29.578646 5.7967778,30.403881 6.6,29.8 l 9.4,-7.05 9.4,7.05 c 0.803075,0.601563 1.893863,-0.222354 1.534,-1.159z" style="fill:color_fill; stroke:color_stroke; stroke-width:width_stroke;" stroke-linecap="butt" data-name="Arrow GPS"/></svg>',
	separate:'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="20" height="20" viewBox="0 0 122.88 101.61" style="enable-background:new 0 0 16 16"><path d="M15.28,46.33h30V4.44c0-2.45,1.99-4.44,4.44-4.44c2.45,0,4.44,1.99,4.44,4.44v92.72c0,2.45-1.99,4.44-4.44,4.44 c-2.45,0-4.44-1.99-4.44-4.44V55.21H15.07l15.15,15.28c1.72,1.73,1.72,4.54-0.02,6.26c-1.73,1.72-4.54,1.72-6.26-0.02L1.29,53.89 l0,0l-0.01-0.01c-0.05-0.05-0.09-0.09-0.13-0.14l-0.01-0.01l-0.06-0.07l-0.02-0.02l-0.05-0.06l-0.02-0.03l-0.02-0.02l-0.05-0.07 l0,0L0.87,53.4l-0.02-0.02l-0.01-0.02l-0.05-0.07l-0.01-0.02l-0.05-0.07l0,0l-0.04-0.07L0.66,53.1l-0.01-0.02l-0.04-0.07 l-0.01-0.02l-0.02-0.03l-0.04-0.06l0,0L0.5,52.82l-0.01-0.02l-0.04-0.08l0,0l-0.04-0.08L0.4,52.62l-0.03-0.06l-0.01-0.03L0.35,52.5 l-0.03-0.08L0.31,52.4l-0.03-0.08L0.27,52.3l-0.03-0.08l0-0.01c-0.02-0.06-0.04-0.13-0.06-0.19l0-0.01l-0.02-0.08l-0.01-0.02 l-0.01-0.02l-0.02-0.08l-0.02-0.1l0-0.01l-0.02-0.1l0-0.01l-0.01-0.07L0.06,51.5l0-0.02l-0.01-0.08l0-0.02l-0.01-0.08l0,0 L0.02,51.2l0-0.01l0-0.02l-0.01-0.08l0-0.01C0.01,51,0,50.93,0,50.87l0-0.01l0-0.09v-0.02l0-0.08l0-0.02l0-0.02l0-0.08l0-0.02 l0.01-0.08l0,0l0.01-0.09l0-0.01c0.01-0.1,0.02-0.21,0.04-0.31l0.02-0.09l0-0.02c0.02-0.1,0.04-0.2,0.07-0.3l0,0l0.02-0.08 l0.01-0.03l0.01-0.02l0.02-0.08l0.01-0.02l0.03-0.08l0.01-0.02l0.03-0.08l0-0.01c0.04-0.1,0.08-0.19,0.12-0.28l0.01-0.01 c0.03-0.06,0.06-0.12,0.09-0.17l0.01-0.02l0.01-0.02l0.04-0.07l0.01-0.02l0.04-0.07c0.03-0.05,0.06-0.11,0.1-0.16l0.02-0.03 l0.01-0.02l0.05-0.07l0-0.01c0.04-0.06,0.08-0.11,0.12-0.16l0.01-0.01L1,47.97v0l0.07-0.08l0.01-0.01l0.04-0.05l0.05-0.05l0,0 l0.06-0.06l0.02-0.02l0.06-0.06l0,0l0.01-0.01L23.97,25.4c1.74-1.71,4.55-1.69,6.26,0.05c1.71,1.74,1.69,4.55-0.05,6.26 L15.28,46.33L15.28,46.33z M67.86,4.44C67.86,1.99,69.85,0,72.3,0c2.45,0,4.44,1.99,4.44,4.44v41.89h30.86L92.7,31.72 c-1.74-1.71-1.77-4.52-0.05-6.26c1.71-1.74,4.52-1.77,6.26-0.05l22.65,22.21l0.01,0.01l0,0l0.06,0.06l0.02,0.02l0.06,0.06l0,0 l0.05,0.05l0.04,0.05l0.01,0.01l0.07,0.08v0l0.07,0.08l0.01,0.01c0.04,0.05,0.08,0.11,0.12,0.16l0,0.01l0.05,0.07l0.01,0.02 l0.02,0.03c0.03,0.05,0.07,0.11,0.1,0.16l0.04,0.07l0.01,0.02l0.04,0.07l0.01,0.02l0.01,0.02c0.03,0.06,0.06,0.12,0.09,0.17 l0.01,0.01c0.04,0.09,0.08,0.19,0.12,0.28l0,0.01l0.03,0.08l0.01,0.02l0.03,0.08l0.01,0.02l0.02,0.08l0.01,0.02l0.01,0.03 l0.02,0.08l0,0c0.03,0.1,0.05,0.2,0.07,0.3l0,0.02l0.02,0.09c0.02,0.1,0.03,0.21,0.04,0.31l0,0.01l0.01,0.09l0,0l0.01,0.08l0,0.02 l0,0.08l0,0.02l0,0.02l0,0.08v0.02l0,0.09l0,0.01c0,0.07,0,0.13-0.01,0.2l0,0.01l-0.01,0.08l0,0.02l0,0.01l-0.01,0.09l0,0 l-0.01,0.08l0,0.02l-0.01,0.08l0,0.02l-0.01,0.03l-0.01,0.07l0,0.01l-0.02,0.1l0,0.01l-0.02,0.1l-0.02,0.08l-0.01,0.02l-0.01,0.02 l-0.02,0.08l0,0.01c-0.02,0.06-0.04,0.13-0.06,0.19l0,0.01l-0.03,0.08l-0.01,0.02l-0.03,0.08l-0.01,0.02l-0.03,0.08l-0.01,0.02 l-0.01,0.03l-0.03,0.06l-0.01,0.02l-0.04,0.08l0,0l-0.04,0.08l-0.01,0.02l-0.04,0.07l0,0l-0.04,0.06l-0.02,0.03l-0.01,0.02 l-0.04,0.07l-0.01,0.02l-0.01,0.02l-0.04,0.07l0,0l-0.05,0.07l-0.01,0.02l-0.05,0.07l-0.01,0.02l-0.02,0.02l-0.05,0.06l0,0 l-0.05,0.07l-0.02,0.02l-0.02,0.03l-0.05,0.06l-0.02,0.02l-0.06,0.07l-0.01,0.01c-0.04,0.05-0.09,0.1-0.13,0.14l-0.01,0.01l0,0 L98.94,76.73c-1.72,1.73-4.53,1.74-6.26,0.02c-1.73-1.72-1.74-4.53-0.02-6.26l15.15-15.28H76.74v41.96c0,2.45-1.99,4.44-4.44,4.44 c-2.45,0-4.44-1.99-4.44-4.44V4.44L67.86,4.44z M122.16,48.35c0.03,0.05,0.07,0.11,0.1,0.16L122.16,48.35L122.16,48.35z"/></svg>',
	parachute: '<svg fill="#ffffff" height="32px" width="32px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-61.2 -61.2 734.40 734.40" xml:space="preserve" stroke="#ffffff" stroke-width="0.0061200000000000004"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-61.2" y="-61.2" width="734.40" height="734.40" rx="367.2" fill="#7ed0ec" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#942192" stroke-width="66.096"> <g> <path d="M538.203,211.353C536.547,94.556,433.003,0,305.893,0C177.75,0,73.5,96.081,73.5,214.18c0,0.108,0.028,0.204,0.031,0.312 c0.011,0.53,0.088,1.055,0.159,1.585c0.054,0.405,0.085,0.817,0.173,1.211c0.102,0.454,0.267,0.89,0.414,1.336 c0.147,0.445,0.275,0.893,0.465,1.319c0.164,0.369,0.386,0.717,0.584,1.077c0.258,0.465,0.508,0.93,0.817,1.361 c0.062,0.088,0.096,0.184,0.162,0.269l184.532,247.812l-22.338,13.043c-6.763,3.95-9.042,12.629-5.095,19.392 c2.637,4.517,7.381,7.032,12.258,7.032c2.427,0,4.888-0.627,7.134-1.937l14.705-8.586v40.312v58.102 c0,7.832,6.349,14.178,14.178,14.178s14.178-6.346,14.178-14.178v-43.925h20.328v43.925c0,7.832,6.349,14.178,14.178,14.178 s14.178-6.346,14.178-14.178V539.72v-38.464l11.543,6.74c2.249,1.31,4.707,1.937,7.134,1.937c4.877,0,9.624-2.518,12.258-7.032 c3.95-6.763,1.667-15.442-5.095-19.392l-20.135-11.756l185.491-249.1C538.249,219.279,538.983,215.17,538.203,211.353z M334.96,397.471c-5.623-10.208-16.483-17.141-28.936-17.141c-12.454,0-23.314,6.936-28.936,17.141l-42.048-169.113h141.968 L334.96,397.471z M115.911,228.358h89.911l45.068,181.266L115.911,228.358z M406.224,228.358h89.908L361.157,409.621 L406.224,228.358z"></path> </g> </g><g id="SVGRepo_iconCarrier"> <g> <path d="M538.203,211.353C536.547,94.556,433.003,0,305.893,0C177.75,0,73.5,96.081,73.5,214.18c0,0.108,0.028,0.204,0.031,0.312 c0.011,0.53,0.088,1.055,0.159,1.585c0.054,0.405,0.085,0.817,0.173,1.211c0.102,0.454,0.267,0.89,0.414,1.336 c0.147,0.445,0.275,0.893,0.465,1.319c0.164,0.369,0.386,0.717,0.584,1.077c0.258,0.465,0.508,0.93,0.817,1.361 c0.062,0.088,0.096,0.184,0.162,0.269l184.532,247.812l-22.338,13.043c-6.763,3.95-9.042,12.629-5.095,19.392 c2.637,4.517,7.381,7.032,12.258,7.032c2.427,0,4.888-0.627,7.134-1.937l14.705-8.586v40.312v58.102 c0,7.832,6.349,14.178,14.178,14.178s14.178-6.346,14.178-14.178v-43.925h20.328v43.925c0,7.832,6.349,14.178,14.178,14.178 s14.178-6.346,14.178-14.178V539.72v-38.464l11.543,6.74c2.249,1.31,4.707,1.937,7.134,1.937c4.877,0,9.624-2.518,12.258-7.032 c3.95-6.763,1.667-15.442-5.095-19.392l-20.135-11.756l185.491-249.1C538.249,219.279,538.983,215.17,538.203,211.353z M334.96,397.471c-5.623-10.208-16.483-17.141-28.936-17.141c-12.454,0-23.314,6.936-28.936,17.141l-42.048-169.113h141.968 L334.96,397.471z M115.911,228.358h89.911l45.068,181.266L115.911,228.358z M406.224,228.358h89.908L361.157,409.621 L406.224,228.358z"></path> </g> </g></svg>',
	station: '',
}

LFVBASEURL = "https://aro.lfv.se/Links/Link/ViewLink";
