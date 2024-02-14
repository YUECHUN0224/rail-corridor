var config = {
    style: 'mapbox://styles/zycgtt/clsitfpke01yh01r4581p1dt5/draft',
    accessToken: 'pk.eyJ1IjoienljZ3R0IiwiYSI6ImNrdHplYmwxMzA3ZHQydm13YXJtNWQ0dGcifQ.AvDiMVpfEZ4-Q04BM-vdtQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'The Green Guide to the Rail Corridor (Central)',
    subtitle: 'A biophlic hike along the greenway in Singapore',
    byline: 'By ZHENG YUECHUN',
    footer: 'Source: @OpenstreetMap,data.gov.sg, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Overview',
            image: 'location.png',
            description: 'The Rail Corridor (or Green Corridor) is an important part of the PCN (Park Connector Network of Singapore), which is 24 km long, flat from Tanjong Pagar in the south to Kranji in the north. It can be divided into three main sections, Central, Southern and Northern.The central stretch of the Rail Corridor(Grass green line~4 km) is the most accessible and walkable part.',
            location: {
                center: [103.78992, 1.37259],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Theme Journey',
            image: 'theme.png',
            description: 'The railway corridor (Central) is divided into four themes (ridgeline, rainforest, kampung garden, bukit timah railway station) for reopening, bringing Singaporeans closer to nature, heritage and leisure.',
            location: {
                center: [103.77663, 1.34483],
                zoom: 14.03,
                pitch: 60,
                bearing: -43.2,
                speed: 0.5,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer:'assess-point',
                    opacity:0,
                    layer:'mcdonalds_0212',
                    opacity:0
                }
            ],
            onChapterExit: [
                {
                    layer:'assess-point',
                    opacity:1,
                    layer:'mcdonalds_0212',
                    opacity:1
                }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Access Points',
            image: 'ap.png',
            description: 'There are many access points into the Rail Corridor. Please refer to the maps below to plan your visit to the Rail Corridor.(Details on the online map)',
            location: {
                center: [103.77006, 1.35300],
                zoom: 13.52,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Fast Supply Station: McDonalds Beauty World',
            image: 'mc.png',
            description: 'Classic, long-running fast-food chain known for its burgers & fries.Good choice for your long-term hiking along Rail Corridor (central)After your fill of food, continue along the road and cross over the pedestrian bridge.Good view is continuing!',
            location: {
                center: [103.77538, 1.35809],
                zoom: 13.45,
                pitch: 60,
                bearing: 30,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Fast Supply Station: Cooperated with McDonalds',
            description: 'Go hiking now! i am loving it. Green, Health and Good Weather :)',
            location: {
                center: [103.85931, 1.36575],
                zoom: 11,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
