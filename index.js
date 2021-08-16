function updatemap() {

    fetch("data.json")
        .then(response => response.json())
        .then((rsp) => {

            rsp.data.forEach(element => {

                // retrieving data from the jsomn file            

                let latitude = element.latitude;
                let longitude = element.longitude;

                //Adding A Marker
                if (element.infected < 500) {
                    new mapboxgl.Marker({ color: "#33ff77" })
                        .setLngLat([longitude, latitude])
                        .addTo(map);
                }
                
                else if (element.infected >= 500 && element.infected <= 1000) {
                    new mapboxgl.Marker({ color: " #66c2ff" })
                        .setLngLat([longitude, latitude])
                        .addTo(map);
                }
                
                else if (element.infected > 1000) {
                    new mapboxgl.Marker({ color: "#ff1a1a" })
                        .setLngLat([longitude, latitude])
                        .addTo(map);
                }

            });
        });
}

updatemap();
