import { Director } from "./director";
import { TextBuilder } from "./textBuilder";
import { WaterBuilder } from "./WaterBuilder";

const Main = () => {
    const textBuilder: TextBuilder = new TextBuilder();
    const textDirector: Director = new Director(textBuilder);
    textDirector.construct();
    const textResult: string = textBuilder.getResult();
    console.log(textResult);

    const waterBuilder: WaterBuilder = new WaterBuilder();
    const waterDirector: Director = new Director(waterBuilder);
    waterDirector.construct();
    const waterResult: string = waterBuilder.getResult();
    console.log(waterResult);
};

Main();
