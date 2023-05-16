import Color from "color";
import { lighten, darken } from 'polished';


const darkenVal = 0.12;
const lightenVal = 0.3;

const brandColor = "#56BC2F";
// const info = "#329DFF";
// const warning = "#FFBA00";
// const danger = "#FF5444";

const primaryColor =  Color(darken(0.14, Color(brandColor).string()));
const primaryColorLight = lighten(lightenVal, primaryColor.string()); //primaryColor.lighten(15); //Color(lighten(0.5, primaryColor.string()));
const primaryColorDark = darken(darkenVal, primaryColor.string()); //primaryColor.darken(1); //Color(darken(5,primaryColor.string()));
const primaryColorContrast = primaryColor.isLight() ? Color("#121212") : Color("#FDFDFD");
const primaryColorLightContrast = Color(primaryColorLight).isLight() ? Color("#121212") : Color("#FDFDFD");
const primaryColorDarkContrast = Color(primaryColorDark).isLight() ? Color("#121212") : Color("#FDFDFD");
console.error('primary:\tL: ' +Color(primaryColorLight).hsl() +'\t\tB:' +primaryColor.hsl() +'  D: ' +Color(primaryColorDark).hsl());


const infoColor = primaryColor.rotate(95).saturate(1);
const infoColorLight = lighten(lightenVal, infoColor.string()); //primaryColor.lighten(15); //Color(lighten(0.5, primaryColor.string()));
const infoColorDark = darken(darkenVal, infoColor.string()); //primaryColor.darken(1); //Color(darken(5,primaryColor.string()));
const infoColorContrast = primaryColor.isLight() ? Color("#121212") : Color("#FDFDFD");
const infoColorLightContrast = Color(infoColorLight).isLight() ? Color("#121212") : Color("#FDFDFD");
const infoColorDarkContrast = Color(infoColorDark).isLight() ? Color("#121212") : Color("#FDFDFD");
console.error('info:\t\tL: ' +Color(infoColorLight).hsl() +'\t\tB:' +infoColor.hsl() +'   D: ' +Color(infoColorDark).hsl());

const warningColor = Color(primaryColor.rotate(-60).saturate(1).lighten(0.3));
const warningColorLight = lighten(lightenVal, warningColor.string()); //primaryColor.lighten(15); //Color(lighten(0.5, primaryColor.string()));
const warningColorDark = darken(darkenVal, warningColor.string()); //primaryColor.darken(1); //Color(darken(5,primaryColor.string()));
const warningColorContrast = Color(warningColor).isLight() ? Color("#121212") : Color("#FDFDFD");
const warningColorLightContrast = Color(warningColorLight).isLight() ? Color("#121212") : Color("#FDFDFD");
const warningColorDarkContrast = Color(warningColorDark).isLight() ? Color("#121212") : Color("#FDFDFD");
console.error('warning:\tL: ' +Color(warningColorLight).hsl() +' \t\tB:' +warningColor.hsl() +'     D: ' +Color(warningColorDark).hsl());


const dangerColor = Color(primaryColor.rotate(-98).saturate(0.2).lighten(0.3));
const dangerColorLight = lighten(lightenVal, dangerColor.string()); //primaryColor.lighten(15); //Color(lighten(0.5, primaryColor.string()));
const dangerColorDark = darken(darkenVal, dangerColor.string()); //primaryColor.darken(1); //Color(darken(5,primaryColor.string()));
const dangerColorContrast = primaryColor.isLight() ? Color("#121212") : Color("#FDFDFD");
const dangerColorLightContrast = Color(dangerColorLight).isLight() ? Color("#121212") : Color("#FDFDFD");
const dangerColorDarkContrast = Color(dangerColorDark).isLight() ? Color("#121212") : Color("#FDFDFD");

console.error('danger:\tL: ' +Color(dangerColorLight).hsl() +'\t\tB:' +dangerColor.hsl() +'    D: ' +Color(dangerColorDark).hsl());
 

const accentBlueColor = Color(primaryColor.rotate(-280));
const accentBlueColorLight = lighten(lightenVal, accentBlueColor.string()); //primaryColor.lighten(15); //Color(lighten(0.5, primaryColor.string()));
const accentBlueColorDark = darken(darkenVal, accentBlueColor.string()); //primaryColor.darken(1); //Color(darken(5,primaryColor.string()));
const accentBlueColorContrast = primaryColor.isLight() ? Color("#121212") : Color("#FDFDFD");
const accentBlueColorLightContrast = Color(accentBlueColorLight).isLight() ? Color("#121212") : Color("#FDFDFD");
const accentBlueColorDarkContrast = Color(accentBlueColorDark).isLight() ? Color("#121212") : Color("#FDFDFD");

console.error('accentBlue:\tL: ' +Color(accentBlueColorLight).hsl() +'\t\tB:' +accentBlueColor.hsl() +'    D: ' +Color(accentBlueColorDark).hsl());

const accentOrangeColor = Color(primaryColor.rotate(-76).saturate(0.55).lighten(0.1));
const accentOrangeColorLight = lighten(lightenVal, accentOrangeColor.string()); //primaryColor.lighten(15); //Color(lighten(0.5, primaryColor.string()));
const accentOrangeColorDark = darken(darkenVal, accentOrangeColor.string()); //primaryColor.darken(1); //Color(darken(5,primaryColor.string()));
const accentOrangeColorContrast = primaryColor.isLight() ? Color("#121212") : Color("#FDFDFD");
const accentOrangeColorLightContrast = Color(accentOrangeColorLight).isLight() ? Color("#121212") : Color("#FDFDFD");
const accentOrangeColorDarkContrast = Color(accentOrangeColorDark).isLight() ? Color("#121212") : Color("#FDFDFD");

console.error('accentOrange:\tL: ' +Color(accentOrangeColorLight).hsl() +'\t\tB:' +accentOrangeColor.hsl() +'    D: ' +Color(accentOrangeColorDark).hsl());

const accentPurpleColor = Color(primaryColor.rotate(-193.5).saturate(0.289).lighten(0.8));
const accentPurpleColorLight = lighten(lightenVal, accentPurpleColor.string()); //primaryColor.lighten(15); //Color(lighten(0.5, primaryColor.string()));
const accentPurpleColorDark = darken(darkenVal, accentPurpleColor.string()); //primaryColor.darken(1); //Color(darken(5,primaryColor.string()));
const accentPurpleColorContrast = primaryColor.isLight() ? Color("#121212") : Color("#FDFDFD");
const accentPurpleColorLightContrast = Color(accentPurpleColorLight).isLight() ? Color("#121212") : Color("#FDFDFD");
const accentPurpleColorDarkContrast = Color(accentPurpleColorDark).isLight() ? Color("#121212") : Color("#FDFDFD");

console.error('accentPurple:\tL: ' +Color(accentPurpleColorLight).hsl() +'\t\tB:' +accentPurpleColor.hsl() +'    D: ' +Color(accentPurpleColorDark).hsl());


document.body.style.setProperty("--color-primary", primaryColor.string());
document.body.style.setProperty("--color-primary-contrast", primaryColorContrast.string());
document.body.style.setProperty("--color-primary-light", primaryColorLight); 
document.body.style.setProperty("--color-primary-light-contrast", primaryColorLightContrast.string());
document.body.style.setProperty("--color-primary-dark", primaryColorDark);
document.body.style.setProperty("--color-primary-dark-contrast", primaryColorDarkContrast.string());

document.body.style.setProperty("--color-info", infoColor.string());
document.body.style.setProperty("--color-info-contrast", infoColorContrast.string());
document.body.style.setProperty("--color-info-light", infoColorLight);
document.body.style.setProperty("--color-info-light-contrast", infoColorLightContrast.string());
document.body.style.setProperty("--color-info-dark", infoColorDark);
document.body.style.setProperty("--color-info-dark-contrast", infoColorDarkContrast.string());


document.body.style.setProperty("--color-warning", warningColor.string());
document.body.style.setProperty("--color-warning-contrast", warningColorContrast.string());
document.body.style.setProperty("--color-warning-dark", warningColorDark);
document.body.style.setProperty("--color-warning-dark-contrast", warningColorDarkContrast.string());
document.body.style.setProperty("--color-warning-light", warningColorLight);
document.body.style.setProperty("--color-warning-light-contrast", warningColorLightContrast.string());


document.body.style.setProperty("--color-danger", dangerColor.string());
document.body.style.setProperty("--color-danger-contrast", dangerColorContrast.string());
document.body.style.setProperty("--color-danger-dark", dangerColorDark);
document.body.style.setProperty("--color-danger-dark-contrast", dangerColorDarkContrast.string());
document.body.style.setProperty("--color-danger-light", dangerColorLight); 
document.body.style.setProperty("--color-danger-light-contrast", dangerColorLightContrast.string());

document.body.style.setProperty("--color-accent-blue", accentBlueColor.string());
document.body.style.setProperty("--color-accent-blue-contrast", accentBlueColorContrast.string());
document.body.style.setProperty("--color-accent-blue-dark", accentBlueColorDark);
document.body.style.setProperty("--color-accent-blue-dark-contrast", accentBlueColorDarkContrast.string());
document.body.style.setProperty("--color-accent-blue-light", accentBlueColorLight); 
document.body.style.setProperty("--color-accent-blue-light-contrast", accentBlueColorLightContrast.string());


document.body.style.setProperty("--color-accent-orange", accentOrangeColor.string());
document.body.style.setProperty("--color-accent-orange-contrast", accentOrangeColorContrast.string());
document.body.style.setProperty("--color-accent-orange-dark", accentOrangeColorDark);
document.body.style.setProperty("--color-accent-orange-dark-contrast", accentOrangeColorDarkContrast.string());
document.body.style.setProperty("--color-accent-orange-light", accentOrangeColorLight); 
document.body.style.setProperty("--color-accent-orange-light-contrast", accentOrangeColorLightContrast.string());

document.body.style.setProperty("--color-accent-purple", accentPurpleColor.string());
document.body.style.setProperty("--color-accent-purple-contrast", accentPurpleColorContrast.string());
document.body.style.setProperty("--color-accent-purple-dark", accentPurpleColorDark);
document.body.style.setProperty("--color-accent-purple-dark-contrast", accentPurpleColorDarkContrast.string());
document.body.style.setProperty("--color-accent-purple-light", accentPurpleColorLight); 
document.body.style.setProperty("--color-accent-purple-light-contrast", accentPurpleColorLightContrast.string());

