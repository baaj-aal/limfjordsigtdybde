var wms_layers = [];

var lyr_Skrmkortdmpet_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.datafordeler.dk/Dkskaermkort/topo_skaermkort/1.0.0/wms?apikey=TYcMiW7gGPaWsSsBBaVaCM4HR6WoVVhTGFphSUDF99lJt8wKxtbvHWHj2FUAgBVSnoYCs8WG4GFeNKqBsv0lQzdcQ0gChJjag",
                              attributions: ' ',
                              params: {
                                "LAYERS": "dtk_skaermkort_daempet",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Skærmkort - dæmpet',
                            popuplayertitle: 'Skærmkort - dæmpet',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Skrmkortdmpet_0, 0]);
var format_NOVANAsigtdybde2026_1 = new ol.format.GeoJSON();
var features_NOVANAsigtdybde2026_1 = format_NOVANAsigtdybde2026_1.readFeatures(json_NOVANAsigtdybde2026_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NOVANAsigtdybde2026_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NOVANAsigtdybde2026_1.addFeatures(features_NOVANAsigtdybde2026_1);
var lyr_NOVANAsigtdybde2026_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NOVANAsigtdybde2026_1, 
                style: style_NOVANAsigtdybde2026_1,
                popuplayertitle: 'NOVANA sigtdybde 2026',
                interactive: true,
                title: '<img src="styles/legend/NOVANAsigtdybde2026_1.png" /> NOVANA sigtdybde 2026'
            });
var format_DN_sigtdybde_2026_2 = new ol.format.GeoJSON();
var features_DN_sigtdybde_2026_2 = format_DN_sigtdybde_2026_2.readFeatures(json_DN_sigtdybde_2026_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DN_sigtdybde_2026_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DN_sigtdybde_2026_2.addFeatures(features_DN_sigtdybde_2026_2);
var lyr_DN_sigtdybde_2026_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DN_sigtdybde_2026_2, 
                style: style_DN_sigtdybde_2026_2,
                popuplayertitle: 'DN_sigtdybde_2026',
                interactive: true,
                title: '<img src="styles/legend/DN_sigtdybde_2026_2.png" /> DN_sigtdybde_2026'
            });

lyr_Skrmkortdmpet_0.setVisible(true);lyr_NOVANAsigtdybde2026_1.setVisible(true);lyr_DN_sigtdybde_2026_2.setVisible(true);
var layersList = [lyr_Skrmkortdmpet_0,lyr_NOVANAsigtdybde2026_1,lyr_DN_sigtdybde_2026_2];
lyr_NOVANAsigtdybde2026_1.set('fieldAliases', {'fid': 'fid', 'stedid': 'stedid', 'stedtype': 'stedtype', 'stedtekst': 'stedtekst', 'x_koordinat': 'x_koordinat', 'y_koordinat': 'y_koordinat', 'vandområde': 'vandområde', 'media': 'media', });
lyr_DN_sigtdybde_2026_2.set('fieldAliases', {'fid': 'fid', 'ID number': 'ID number', 'Name': 'Name', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'min': 'min', 'max': 'max', 'media': 'media', });
lyr_NOVANAsigtdybde2026_1.set('fieldImages', {'fid': 'Hidden', 'stedid': 'Hidden', 'stedtype': 'Hidden', 'stedtekst': 'TextEdit', 'x_koordinat': 'Hidden', 'y_koordinat': 'Hidden', 'vandområde': 'TextEdit', 'media': 'ExternalResource', });
lyr_DN_sigtdybde_2026_2.set('fieldImages', {'fid': 'Hidden', 'ID number': 'Hidden', 'Name': 'TextEdit', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'min': 'Hidden', 'max': 'Hidden', 'media': 'ExternalResource', });
lyr_NOVANAsigtdybde2026_1.set('fieldLabels', {'stedtekst': 'hidden field', 'vandområde': 'hidden field', 'media': 'no label', });
lyr_DN_sigtdybde_2026_2.set('fieldLabels', {'Name': 'hidden field', 'media': 'no label', });
lyr_DN_sigtdybde_2026_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});