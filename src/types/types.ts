export type headerTypes = {
   header: Array<{text: string,href: string}>
   logo: string
}

export type mainTypes = {
    main: Array<{heading:string,description: string, btnText: string}>
}

export type footerTypes = {
    footer: Array<{heading:string, img:string, title: string}>
    media: Array<{img:string, title: string, href:string}>
}

export type categoriesSlideTypes = {
    slider: Array<{text:string, src: string, title: string}>
}

export type aboutUsTypes = {
    head: string,
    aboutus: Array<{heading:string, text: string}>,
    list: Array<{img:string, tagline:string, description: string}>
}

export type propositionsTypes = {
    heading: {text:string, subtext: string}
    cards: Array<{img:string, nameCard:string,time:string,price:string,btnText:string}>
}

export type advertisementTypes = {
    img: string
    advertisement: {heading: string, description: string}
}

export type servicesTypes = {
    heading: string,
    list: Array<{img:string, price: string, itemName: string, text: string,goDetails:string}>
    goCatalog: {btnText: string, src:string}
}

export type aplicationFormTypes = {
    heading:string,
    text:string,
    img:string,
    textBtn:string
}