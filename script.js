'use strict';const _0x1dad2d=_0x58c3;(function(_0x25f547,_0x1e3e72){const _0x519332=_0x58c3,_0x18429a=_0x25f547();while(!![]){try{const _0x1f4113=parseInt(_0x519332(0x9d))/0x1+-parseInt(_0x519332(0xb9))/0x2+parseInt(_0x519332(0xab))/0x3*(parseInt(_0x519332(0xc3))/0x4)+-parseInt(_0x519332(0x9e))/0x5*(parseInt(_0x519332(0xa8))/0x6)+parseInt(_0x519332(0xcd))/0x7+-parseInt(_0x519332(0xa9))/0x8*(parseInt(_0x519332(0xb0))/0x9)+parseInt(_0x519332(0xb6))/0xa;if(_0x1f4113===_0x1e3e72)break;else _0x18429a['push'](_0x18429a['shift']());}catch(_0xf81501){_0x18429a['push'](_0x18429a['shift']());}}}(_0x4605,0xec434));function _0x58c3(_0xfddff0,_0x577170){const _0x4605de=_0x4605();return _0x58c3=function(_0x58c3c6,_0x5da0b3){_0x58c3c6=_0x58c3c6-0x9c;let _0x19118e=_0x4605de[_0x58c3c6];return _0x19118e;},_0x58c3(_0xfddff0,_0x577170);}const apiKey=_0x1dad2d(0xae);function roundTemperature(_0x2057a1){return Math['round'](_0x2057a1);}function roundToNearestHour(_0x3f282b){const _0x48f87e=_0x1dad2d,_0x1cdb22=0x3c*0x3c*0x3e8;return new Date(Math['round'](_0x3f282b[_0x48f87e(0xdc)]()/_0x1cdb22)*_0x1cdb22);}function getLocalWeather(){const _0x3b121f=_0x1dad2d;navigator['geolocation'][_0x3b121f(0xa2)](async _0x53287e=>{const _0x4ad45a=_0x3b121f,_0x287f02=_0x53287e[_0x4ad45a(0xca)]['latitude'],_0x445f0d=_0x53287e[_0x4ad45a(0xca)][_0x4ad45a(0xcb)],_0x20a7ac=await fetch(_0x4ad45a(0xcf)+_0x287f02+_0x4ad45a(0xb5)+_0x445f0d+_0x4ad45a(0xb1)+apiKey+'&units=imperial'),_0x6caa0a=await _0x20a7ac[_0x4ad45a(0xa0)]();displayWeather(_0x6caa0a),suggestActivities(_0x6caa0a);});}function displayWeather(_0x195fa4){const _0x4acf69=_0x1dad2d,_0x26578b=roundTemperature(_0x195fa4[_0x4acf69(0xdd)][_0x4acf69(0xaa)]),_0x4a460d=roundToNearestHour(new Date(_0x195fa4[_0x4acf69(0xa5)]['sunrise']*0x3e8)),_0x58f0fc=roundToNearestHour(new Date(_0x195fa4[_0x4acf69(0xa5)][_0x4acf69(0xc9)]*0x3e8));document[_0x4acf69(0x9f)](_0x4acf69(0xd5))[_0x4acf69(0xc5)]=_0x195fa4[_0x4acf69(0xda)][0x0][_0x4acf69(0xdd)],document[_0x4acf69(0x9f)]('temp')[_0x4acf69(0xc5)]=_0x26578b+'°F',document['getElementById'](_0x4acf69(0xbb))[_0x4acf69(0xc5)]=_0x4a460d['toLocaleTimeString']([],{'hour':_0x4acf69(0xbd),'minute':_0x4acf69(0xbd)}),document[_0x4acf69(0x9f)](_0x4acf69(0xc9))[_0x4acf69(0xc5)]=_0x58f0fc['toLocaleTimeString']([],{'hour':'2-digit','minute':_0x4acf69(0xbd)});}function _0x4605(){const _0xddc340=['hasClass','#tabs\x20li\x20a','smooth','fas\x20fa-moon','weather','light-theme','getTime','main','contains','228969vdbiXm','118995BhXSBl','getElementById','json','theme','getCurrentPosition','<li>Try\x20our\x20refreshing\x20lemonades,\x20guaranteed\x20to\x20quench\x20your\x20thirst!</li>','inactive','sys','remove','drink-list','114iwCPhB','11032yActns','temp','1938741FDWxZt','classList','className','649e96750b250da8f192a43f4f33c03a','#tabs\x20li\x20a:not(:first)','10629Xwbppv','&appid=','attr','DOMContentLoaded','fas\x20fa-sun','&lon=','26069420msAeYR','addEventListener','addClass','1154270qByldd','hide','sunrise','show','2-digit','getItem','a[href^=\x22#\x22]','dark-theme','fadeIn','body','4ZFeOQL','slick','textContent','ready','.container','setItem','sunset','coords','longitude','querySelectorAll','1004423KhlBls','<li>Cool\x20yourself\x20off\x20with\x20our\x20signature\x20iced\x20coffee\x20or\x20blended\x20frappuccinos!</li>','https://api.openweathermap.org/data/2.5/weather?lat=','innerHTML','add','click','theme-toggle','preventDefault','conditions'];_0x4605=function(){return _0xddc340;};return _0x4605();}function suggestActivities(_0x4a5a95){const _0x152833=_0x1dad2d,_0x5837d0=document[_0x152833(0x9f)](_0x152833(0xa7));_0x5837d0['innerHTML']='';const _0x1873ed=roundTemperature(_0x4a5a95['main'][_0x152833(0xaa)]);_0x1873ed>0x4b?(_0x5837d0[_0x152833(0xd0)]+=_0x152833(0xce),_0x5837d0[_0x152833(0xd0)]+=_0x152833(0xa3)):(_0x5837d0[_0x152833(0xd0)]+='<li>Warm\x20yourself\x20up\x20with\x20our\x20hot\x20coffees\x20brewed\x20to\x20the\x20perfect\x20temperature!</li>',_0x5837d0[_0x152833(0xd0)]+='<li>Try\x20our\x20rich\x20and\x20creamy\x20hot\x20chocolate\x20that\x20will\x20dance\x20on\x20your\x20taste\x20buds!</li>');}$(document)['ready'](function(){const _0x3c6bea=_0x1dad2d;$('.slides-container')[_0x3c6bea(0xc4)]();}),document[_0x1dad2d(0xcc)](_0x1dad2d(0xbf))['forEach'](_0x4662b3=>{const _0x1ef0f9=_0x1dad2d;_0x4662b3['addEventListener'](_0x1ef0f9(0xd2),function(_0x235471){const _0x414deb=_0x1ef0f9;_0x235471[_0x414deb(0xd4)](),document['querySelector'](this['getAttribute']('href'))['scrollIntoView']({'behavior':_0x414deb(0xd8)});});}),document['addEventListener'](_0x1dad2d(0xb3),function(){const _0x1853e3=_0x1dad2d;var _0x5123a6=document[_0x1853e3(0x9f)](_0x1853e3(0xd3)),_0x1f89af=document[_0x1853e3(0x9f)]('theme-icon'),_0x3fa982=localStorage[_0x1853e3(0xbe)](_0x1853e3(0xa1));_0x3fa982&&(document['body'][_0x1853e3(0xac)][_0x1853e3(0xd1)](_0x3fa982),_0x1f89af[_0x1853e3(0xad)]=_0x3fa982===_0x1853e3(0xc0)?_0x1853e3(0xb4):_0x1853e3(0xd9)),_0x5123a6[_0x1853e3(0xb7)](_0x1853e3(0xd2),function(){const _0x13b94b=_0x1853e3;document[_0x13b94b(0xc2)][_0x13b94b(0xac)][_0x13b94b(0x9c)](_0x13b94b(0xc0))?(document['body'][_0x13b94b(0xac)][_0x13b94b(0xa6)](_0x13b94b(0xc0)),document[_0x13b94b(0xc2)][_0x13b94b(0xac)]['add'](_0x13b94b(0xdb)),_0x1f89af[_0x13b94b(0xad)]=_0x13b94b(0xd9),localStorage[_0x13b94b(0xc8)](_0x13b94b(0xa1),'light-theme')):(document[_0x13b94b(0xc2)][_0x13b94b(0xac)][_0x13b94b(0xa6)](_0x13b94b(0xdb)),document[_0x13b94b(0xc2)][_0x13b94b(0xac)][_0x13b94b(0xd1)](_0x13b94b(0xc0)),_0x1f89af['className']=_0x13b94b(0xb4),localStorage[_0x13b94b(0xc8)](_0x13b94b(0xa1),_0x13b94b(0xc0)));});}),$(document)[_0x1dad2d(0xc6)](function(){const _0x38de60=_0x1dad2d;$(_0x38de60(0xaf))[_0x38de60(0xb8)]('inactive'),$(_0x38de60(0xc7))[_0x38de60(0xba)](),$('.container:first')[_0x38de60(0xbc)](),$(_0x38de60(0xd7))[_0x38de60(0xd2)](function(){const _0x548a3f=_0x38de60;var _0x2c8d09=$(this)[_0x548a3f(0xb2)]('id');$(this)[_0x548a3f(0xd6)](_0x548a3f(0xa4))&&($(_0x548a3f(0xd7))[_0x548a3f(0xb8)](_0x548a3f(0xa4)),$(this)['removeClass'](_0x548a3f(0xa4)),$(_0x548a3f(0xc7))['hide'](),$('#'+_0x2c8d09+'C')[_0x548a3f(0xc1)]('slow'));});});