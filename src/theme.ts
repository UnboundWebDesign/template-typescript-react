import Color from "color";
import { lighten, darken } from 'polished';

// @ts-ignore
function getValidatedColor({
    // @ts-ignore
    colorToChange,
    colorToValidate = Color("white"),
    minimumContrastRatio = 5,
    // @ts-ignore
    mixingColor,
    // @ts-ignore
    mixingAmount,
    tries = 0,
    maxTries = 8,
  }) {
    const newColor = colorToChange.mix(mixingColor, mixingAmount);
    if (
      newColor.contrast(colorToValidate) < minimumContrastRatio &&
      tries < maxTries
    ) {
      return getValidatedColor({
        colorToChange: newColor,
        mixingColor,
        mixingAmount: 0.1,
        tries: ++tries,
      });
    }
    return newColor;
  }
const darkenVal = 0.13;
const lightenVal = 0.3;

const brandColor = "#56BC2F";
const info = "#329DFF";
const warning = "#FFBA00";
const danger = "#FF5444";

const primaryColor =  Color(darken(0.09, Color(brandColor).string()));
const primaryColorLight = lighten(lightenVal, primaryColor.string()); //primaryColor.lighten(15); //Color(lighten(0.5, primaryColor.string()));
const primaryColorDark = darken(darkenVal, primaryColor.string()); //primaryColor.darken(1); //Color(darken(5,primaryColor.string()));
const primaryColorContrast = primaryColor.isLight() ? Color("black") : Color("white");
const primaryColorLightContrast = Color(primaryColorLight).isLight() ? Color("black") : Color("white");
const primaryColorDarkContrast = Color(primaryColorDark).isLight() ? Color("black") : Color("white");
const primaryLightTextColor = getValidatedColor({
    colorToChange: primaryColor,
    mixingColor: Color("white"),
    colorToValidate: Color("black"),
    mixingAmount: 0.5,
  });
const primaryDarkTextColor = getValidatedColor({
    colorToChange: primaryColor,
    mixingColor: Color("black"),
    mixingAmount: 0.2,
  });

const infoColor = primaryColor.rotate(95);
//const infoColor = Color(info);
const infoColorLight = lighten(lightenVal, infoColor.string()); //primaryColor.lighten(15); //Color(lighten(0.5, primaryColor.string()));
const infoColorDark = darken(darkenVal, infoColor.string()); //primaryColor.darken(1); //Color(darken(5,primaryColor.string()));
const infoColorContrast = primaryColor.isLight() ? Color("black") : Color("white");
const infoColorLightContrast = Color(infoColorLight).isLight() ? Color("black") : Color("white");
const infoColorDarkContrast = Color(infoColorDark).isLight() ? Color("black") : Color("white");
const infoLightTextColor = getValidatedColor({
    colorToChange: infoColor,
    mixingColor: Color("white"),
    colorToValidate: Color("black"),
    mixingAmount: 0.5,
  });
const infoDarkTextColor = getValidatedColor({
    colorToChange: infoColor,
    mixingColor: Color("black"),
    mixingAmount: 0.2,
  });

const warningColor = Color(primaryColor.rotate(-55));

// const warningColor = Color(warning);
const warningColorLight = lighten(lightenVal, warningColor.string()); //primaryColor.lighten(15); //Color(lighten(0.5, primaryColor.string()));
const warningColorDark = darken(darkenVal, warningColor.string()); //primaryColor.darken(1); //Color(darken(5,primaryColor.string()));
const warningColorContrast = Color(warningColor).isLight() ? Color("black") : Color("white");
const warningColorLightContrast = Color(warningColorLight).isLight() ? Color("black") : Color("white");
const warningColorDarkContrast = Color(warningColorDark).isLight() ? Color("black") : Color("white");
const warningLightTextColor = getValidatedColor({
    colorToChange: warningColor,
    mixingColor: Color("white"),
    colorToValidate: Color("black"),
    mixingAmount: 0.5,
  });
const warningDarkTextColor = getValidatedColor({
    colorToChange: warningColor,
    mixingColor: Color("black"),
    mixingAmount: 0.2,
  });

const dangerColor = Color(primaryColor.rotate(-100));
// const dangerColor = Color(danger);
const dangerColorLight = lighten(lightenVal, dangerColor.string()); //primaryColor.lighten(15); //Color(lighten(0.5, primaryColor.string()));
const dangerColorDark = darken(darkenVal, dangerColor.string()); //primaryColor.darken(1); //Color(darken(5,primaryColor.string()));
const dangerColorContrast = primaryColor.isLight() ? Color("black") : Color("white");
const dangerColorLightContrast = Color(dangerColorLight).isLight() ? Color("black") : Color("white");
const dangerColorDarkContrast = Color(dangerColorDark).isLight() ? Color("black") : Color("white");
const dangerLightTextColor = getValidatedColor({
    colorToChange: dangerColor,
    mixingColor: Color("white"),
    colorToValidate: Color("black"),
    mixingAmount: 0.5,
  });
const dangerDarkTextColor = getValidatedColor({
    colorToChange: dangerColor,
    mixingColor: Color("black"),
    mixingAmount: 0.2,
  });





document.body.style.setProperty("--color-primary", primaryColor.string());
document.body.style.setProperty("--color-primary-contrast", primaryColorContrast.string());
document.body.style.setProperty("--color-primary-dark-contrast", primaryColorDarkContrast.string());
document.body.style.setProperty("--color-primary-light-contrast", primaryColorLightContrast.string());

document.body.style.setProperty("--color-primary-light", primaryColorLight);
document.body.style.setProperty("--color-primary-light-text-color", primaryLightTextColor.string());
 
document.body.style.setProperty("--color-primary-dark", primaryColorDark);
document.body.style.setProperty("--color-primary-dark-text-color", primaryDarkTextColor.string());

document.body.style.setProperty("--color-info", infoColor.string());
document.body.style.setProperty("--color-info-contrast", infoColorContrast.string());
document.body.style.setProperty("--color-info-dark-contrast", infoColorDarkContrast.string());
document.body.style.setProperty("--color-info-light-contrast", infoColorLightContrast.string());

document.body.style.setProperty("--color-info-light", infoColorLight);
document.body.style.setProperty("--color-info-light-text-color", infoLightTextColor.string());
 
document.body.style.setProperty("--color-info-dark", infoColorDark);
document.body.style.setProperty("--color-info-dark-text-color", infoDarkTextColor.string());


document.body.style.setProperty("--color-warning", warningColor.string());
document.body.style.setProperty("--color-warning-contrast", warningColorContrast.string());
document.body.style.setProperty("--color-warning-dark-contrast", warningColorDarkContrast.string());
document.body.style.setProperty("--color-warning-light-contrast", warningColorLightContrast.string());

document.body.style.setProperty("--color-warning-light", warningColorLight);
document.body.style.setProperty("--color-warning-light-text-color", warningLightTextColor.string());
 
document.body.style.setProperty("--color-warning-dark", warningColorDark);
document.body.style.setProperty("--color-warning-dark-text-color", warningDarkTextColor.string());


document.body.style.setProperty("--color-danger", dangerColor.string());
document.body.style.setProperty("--color-danger-contrast", dangerColorContrast.string());
document.body.style.setProperty("--color-danger-dark-contrast", dangerColorDarkContrast.string());
document.body.style.setProperty("--color-danger-light-contrast", dangerColorLightContrast.string());

document.body.style.setProperty("--color-danger-light", dangerColorLight);
document.body.style.setProperty("--color-danger-light-text-color", dangerLightTextColor.string());
 
document.body.style.setProperty("--color-danger-dark", dangerColorDark);
document.body.style.setProperty("--color-danger-dark-text-color", dangerDarkTextColor.string());
console.error(warningColorContrast)

// // in Button.css
// .button {
//   background-color: var(--color-primary);
//   color: var(--color-primary-contrast);
// }