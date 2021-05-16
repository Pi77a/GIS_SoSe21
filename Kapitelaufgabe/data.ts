
namespace KlappBuch {

    export interface Rocket {
        imageId: string;
        top: {
            imageUrl: string;
        };
        mid: {
            imageUrl: string;
        };
        bottom: {
            imageUrl: string;
        };
    }
    export let fullRocket: Rocket[] = [
        {
            imageId: "rocket-blue",
            top: {
                imageUrl: "data/Rocket_blue_top.png"
            },
            mid: {
                imageUrl: "data/Rocket_blue_mid.png"
            },
            bottom: {
                imageUrl: "data/Rocket_blue_bottom.png"
            }
        }, {
            imageId: "rocket-red",
            top: {
                imageUrl: "data/Rocket_red_top.png"
            },
            mid: {
                imageUrl: "data/Rocket_red_mid.png"
            },
            bottom: {
                imageUrl: "data/Rocket_red_bottom.png"
            }
        }, {
            imageId: "rocket-green",
            top: {
                imageUrl: "data/Rocket_green_top.png"
            },
            mid: {
                imageUrl: "data/Rocket_green_mid.png"
            },
            bottom: {
                imageUrl: "data/Rocket_green_bottom.png"
            }
        }, {
            imageId: "rocket-yellow",
            top: {
                imageUrl: "data/Rocket_yellow_top.png"
            },
            mid: {
                imageUrl: "data/Rocket_yellow_mid.png"
            },
            bottom: {
                imageUrl: "data/Rocket_yellow_bottom.png"
            }
        }
    ];
    export let fullRocketJSON: string = JSON.stringify(fullRocket);
}