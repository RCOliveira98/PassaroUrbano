export class OfertaModel {
    public id: number;
    public category: string;
    public title: string;
    public description: string;
    public advertiser: string;
    public price: number;
    public spotlightStatus: boolean;
    public images: Array<object>;
}
