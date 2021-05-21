
namespace KlappBuch {

    export interface Rocket {
        imageId: string;
        top: {
            imageUrl: string;
            headline: string;
        };
        mid: {
            imageUrl: string;
            headline: string;
        };
        bottom: {
            imageUrl: string;
            headline: string;
        };
    }
    export let fullRocket: Rocket[] = [
        {
            imageId: "rocket-blue",
            top: {
                imageUrl: "data/Rocket_blue_top.png",
                headline: "Blue Top"
            },
            mid: {
                imageUrl: "data/Rocket_blue_mid.png",
                headline: "Blue Mid"
            },
            bottom: {
                imageUrl: "data/Rocket_blue_bottom.png",
                headline: "Blue Bottom"
            }
        }, {
            imageId: "rocket-red",
            top: {
                imageUrl: "data/Rocket_red_top.png",
                headline: "Red Top"
            },
            mid: {
                imageUrl: "data/Rocket_red_mid.png",
                headline: "Red Mid"
            },
            bottom: {
                imageUrl: "data/Rocket_red_bottom.png",
                headline: "Red Bottom"
            }
        }, {
            imageId: "rocket-green",
            top: {
                imageUrl: "data/Rocket_green_top.png",
                headline: "Green Top"
            },
            mid: {
                imageUrl: "data/Rocket_green_mid.png",
                headline: "Green Mid"
            },
            bottom: {
                imageUrl: "data/Rocket_green_bottom.png",
                headline: "Green Bottom"
            }
        }, {
            imageId: "rocket-yellow",
            top: {
                imageUrl: "data/Rocket_yellow_top.png",
                headline: "Yellow Top"
            },
            mid: {
                imageUrl: "data/Rocket_yellow_mid.png",
                headline: "Yellow Mid"
            },
            bottom: {
                imageUrl: "data/Rocket_yellow_bottom.png",
                headline: "Yellow Bottom"
            }
        }
    ];
    
    export let fullRocketJSON: string = JSON.stringify(fullRocket);
}