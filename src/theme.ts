import Color from "color";
import { lighten, darken } from 'polished';

const darkenVal = 0.3;
const lightenVal = 1;

const brandColor = Color("#56BC2F");
const blackColor = Color("#121212");
const whiteColor = Color("#FDFDFD");

console.clear();

const primaryColor = brandColor.darken(0.3).round(); 
const primaryColorLight =  primaryColor.lighten(lightenVal);
const primaryColorDark =  primaryColor.darken(darkenVal);
const primaryColorContrast = primaryColor.isLight() ? blackColor : whiteColor;
const primaryColorLightContrast = primaryColorLight.isLight() ? blackColor : whiteColor;
const primaryColorDarkContrast = primaryColorDark.isLight() ? blackColor : whiteColor;
console.log('primary:\t\tL:' +primaryColorLight.hex() +'\t\tB:' +primaryColor.hex()+'\t\tD:' +primaryColorDark.hex());

const infoColor = primaryColor.rotate(95).saturate(1);
const infoColorLight = infoColor.lighten(lightenVal);
const infoColorDark = infoColor.darken(darkenVal); 
const infoColorContrast = infoColor.isLight() ? blackColor : whiteColor;
const infoColorLightContrast = infoColorLight.isLight() ? blackColor : whiteColor;
const infoColorDarkContrast = infoColorDark.isLight() ? blackColor : whiteColor;
console.log('info:\t\t\tL:' +infoColorLight.hex() +'\t\tB:' +infoColor.hex()+'\t\tD:' +infoColorDark.hex());

const warningColor = primaryColor.rotate(-60).saturate(1).lighten(0.305); 
const warningColorLight = warningColor.lighten(lightenVal);
const warningColorDark = warningColor.darken(darkenVal+0.09);
const warningColorContrast = warningColor.isLight() ? blackColor : whiteColor;
const warningColorLightContrast = warningColorLight.isLight() ? blackColor : whiteColor;
const warningColorDarkContrast = warningColorDark.isLight() ? blackColor : whiteColor;
console.log('warning:\t\tL:' +warningColorLight.hex() +' \t\tB:' +warningColor.hex()+'\t\tD:' +warningColorDark.hex());
 
const dangerColor = primaryColor.rotate(-92).saturate(0.4).lighten(0.3);
const dangerColorLight = dangerColor.lighten(lightenVal); 
const dangerColorDark = dangerColor.darken(darkenVal); 
const dangerColorContrast = dangerColor.isLight() ? blackColor : whiteColor;
const dangerColorLightContrast = dangerColorLight.isLight() ? blackColor : whiteColor;
const dangerColorDarkContrast = dangerColorDark.isLight() ? blackColor : whiteColor;
console.log('danger:\t\t\tL:' +dangerColorLight.hex() +'\t\tB:' +dangerColor.hex()+'\t\tD:' +dangerColorDark.hex());
 
const accentBlueColor = primaryColor.rotate(-280);
const accentBlueColorLight = accentBlueColor.lighten(lightenVal); 
const accentBlueColorDark = accentBlueColor.darken(darkenVal); 
const accentBlueColorContrast = accentBlueColor.isLight() ? blackColor : whiteColor;
const accentBlueColorLightContrast = accentBlueColorLight.isLight() ? blackColor : whiteColor;
const accentBlueColorDarkContrast = accentBlueColorDark.isLight() ? blackColor : whiteColor;
console.log('accentBlue:\t\tL:' +accentBlueColorLight.hex()+'\t\tB:' +accentBlueColor.hex()+'\t\tD:' +accentBlueColorDark.hex());

const accentOrangeColor = primaryColor.rotate(-76).saturate(1).lighten(0.1);
const accentOrangeColorLight = accentOrangeColor.lighten(lightenVal);
const accentOrangeColorDark = accentOrangeColor.darken(darkenVal); 
const accentOrangeColorContrast = primaryColor.isLight() ? blackColor : whiteColor;
const accentOrangeColorLightContrast = accentOrangeColorLight.isLight() ? blackColor : whiteColor;
const accentOrangeColorDarkContrast = accentOrangeColorDark.isLight() ? blackColor : whiteColor;
console.log('accentOrange:\tL:' +accentOrangeColorLight.hex()+'\t\tB:' +accentOrangeColor.hex()+'\t\tD:' +accentOrangeColorDark.hex());

const accentPurpleColor = primaryColor.rotate(-193.5).saturate(0.1).lighten(0.65);
const accentPurpleColorLight = accentPurpleColor.lighten(lightenVal-0.6); 
const accentPurpleColorDark = accentPurpleColor.darken(darkenVal); 

const accentPurpleColorContrast = accentPurpleColor.isLight() ? blackColor : whiteColor;
const accentPurpleColorLightContrast = accentPurpleColorLight.isLight() ? blackColor : whiteColor;
const accentPurpleColorDarkContrast = accentPurpleColorDark.isLight() ? blackColor : whiteColor;
console.log('accentPurple:\tL:' +accentPurpleColorLight.hex()+'\t\tB:' +accentPurpleColor.hex()+'\t\tD:' +accentPurpleColorDark.hex());


document.body.style.setProperty("--color-primary", primaryColor.string());
document.body.style.setProperty("--color-primary-contrast", primaryColorContrast.hex());
document.body.style.setProperty("--color-primary-light", primaryColorLight.hex()); 
document.body.style.setProperty("--color-primary-light-contrast", primaryColorLightContrast.hex());
document.body.style.setProperty("--color-primary-dark", primaryColorDark.hex());
document.body.style.setProperty("--color-primary-dark-contrast", primaryColorDarkContrast.hex());

document.body.style.setProperty("--color-info", infoColor.string());
document.body.style.setProperty("--color-info-contrast", infoColorContrast.hex());
document.body.style.setProperty("--color-info-light", infoColorLight.hex());
document.body.style.setProperty("--color-info-light-contrast", infoColorLightContrast.hex());
document.body.style.setProperty("--color-info-dark", infoColorDark.hex());
document.body.style.setProperty("--color-info-dark-contrast", infoColorDarkContrast.hex());

document.body.style.setProperty("--color-warning", warningColor.string());
document.body.style.setProperty("--color-warning-contrast", warningColorContrast.hex());
document.body.style.setProperty("--color-warning-dark", warningColorDark.hex());
document.body.style.setProperty("--color-warning-dark-contrast", warningColorDarkContrast.hex());
document.body.style.setProperty("--color-warning-light", warningColorLight.hex());
document.body.style.setProperty("--color-warning-light-contrast", warningColorLightContrast.hex());

document.body.style.setProperty("--color-danger", dangerColor.string());
document.body.style.setProperty("--color-danger-contrast", dangerColorContrast.hex());
document.body.style.setProperty("--color-danger-dark", dangerColorDark.hex());
document.body.style.setProperty("--color-danger-dark-contrast", dangerColorDarkContrast.hex());
document.body.style.setProperty("--color-danger-light", dangerColorLight.hex()); 
document.body.style.setProperty("--color-danger-light-contrast", dangerColorLightContrast.hex());

document.body.style.setProperty("--color-accent-blue", accentBlueColor.string());
document.body.style.setProperty("--color-accent-blue-contrast", accentBlueColorContrast.hex());
document.body.style.setProperty("--color-accent-blue-dark", accentBlueColorDark.hex());
document.body.style.setProperty("--color-accent-blue-dark-contrast", accentBlueColorDarkContrast.hex());
document.body.style.setProperty("--color-accent-blue-light", accentBlueColorLight.hex()); 
document.body.style.setProperty("--color-accent-blue-light-contrast", accentBlueColorLightContrast.hex());

document.body.style.setProperty("--color-accent-orange", accentOrangeColor.string());
document.body.style.setProperty("--color-accent-orange-contrast", accentOrangeColorContrast.hex());
document.body.style.setProperty("--color-accent-orange-dark", accentOrangeColorDark.hex());
document.body.style.setProperty("--color-accent-orange-dark-contrast", accentOrangeColorDarkContrast.hex());
document.body.style.setProperty("--color-accent-orange-light", accentOrangeColorLight.hex()); 
document.body.style.setProperty("--color-accent-orange-light-contrast", accentOrangeColorLightContrast.hex());

document.body.style.setProperty("--color-accent-purple", accentPurpleColor.string());
document.body.style.setProperty("--color-accent-purple-contrast", accentPurpleColorContrast.hex());
document.body.style.setProperty("--color-accent-purple-dark", accentPurpleColorDark.hex());
document.body.style.setProperty("--color-accent-purple-dark-contrast", accentPurpleColorDarkContrast.hex());
document.body.style.setProperty("--color-accent-purple-light", accentPurpleColorLight.hex()); 
document.body.style.setProperty("--color-accent-purple-light-contrast", accentPurpleColorLightContrast.hex());

