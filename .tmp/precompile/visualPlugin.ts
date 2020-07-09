import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api"
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];

var circleCard3197AFBD9475490BBFF774FAFF879CF8_DEBUG: IVisualPlugin = {
    name: 'circleCard3197AFBD9475490BBFF774FAFF879CF8_DEBUG',
    displayName: 'CircleCard',
    class: 'Visual',
    apiVersion: '2.6.0',
    create: (options: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }

        throw 'Visual instance not found';
    },
    custom: true
};

if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["circleCard3197AFBD9475490BBFF774FAFF879CF8_DEBUG"] = circleCard3197AFBD9475490BBFF774FAFF879CF8_DEBUG;
}

export default circleCard3197AFBD9475490BBFF774FAFF879CF8_DEBUG;