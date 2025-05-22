import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "ustars",
    name: "Embeddable House",
    chainId: "elgafar-1",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            auction:
                "andr1fn9dsng57zv0erlp8wdg5ejkalg7ldxl5fyjqdnxa4zv5cxe00hq0mcn87",
            cw721: "andr1az5c8px08cydj8aph526q0xjkh876eumugrwqrvgn80hclmfdjysm7a38h",
            name: "DramaQueen",
            type: ICollectionType.AUCTION,
            id: "embeddables-auction-1",
            featured: "ANDR1"
        },
        
    ],
};

export default CONFIG;
