export const selectedFlags = (countryName) => {
    switch (countryName){
        case "Argentina" :
            return "./src/resources/images/argentina.svg";
            break;
        case "Chile" :
            return "./src/resources/images/chile.svg";
            break;
        case "Brasil" :
            return "./src/resources/images/brasil.svg";
            break;
        case "Uruguay" :
            return "./src/resources/images/uruguay.svg";
            break;
    }
}