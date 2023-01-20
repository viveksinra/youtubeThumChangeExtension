let myThumb = [
    "https://miro.medium.com/max/828/1*ecwEY6CCo7BkOVOdRLkxsQ.webp",
    "https://miro.medium.com/max/828/1*m9lqu2gN8hg4C3n1K1Usjw.webp",
    "https://miro.medium.com/max/828/1*ThQt4UJPFIzNfoHUTbS65g.webp",
    "https://miro.medium.com/max/720/1*jQttpIBsZ1-Bs31hYG7tYw.webp",
    "https://miro.medium.com/max/720/1*9OpH3593_uxwYmcdnI40ww.webp",
    "https://miro.medium.com/max/720/1*SDAnvRXlSNyNK9F0AjWtkw.webp",
    "https://miro.medium.com/max/720/1*cbDB1LGcjFjRJ-UPVcPjtg.webp",
    "https://miro.medium.com/max/720/1*l3AfM_du0i2XPoWNCaZrNg.webp",
    "https://miro.medium.com/max/720/1*kPvDqxyqvm1HB2V3Jribxw.webp",
    "https://miro.medium.com/max/720/1*we56Pf6LobJk6rttRkiMpQ.webp",
    "https://miro.medium.com/max/720/1*XjqR1TMHFsK2A-RGcKWp7g.webp",
    "https://miro.medium.com/max/720/1*DRYZaVM52IoMXtT0Lqphow.webp",
    "https://miro.medium.com/max/720/1*JBabUQp0ktM8APx6p53uXw.webp",
    "https://miro.medium.com/max/720/1*ERJAi7O4jU4IDpCadJjsgQ.webp",
    "https://miro.medium.com/max/720/1*1sSqc6dyQRKBqKYH0-XWBA.webp",

];

const imgs = document.getElementsByTagName("img");
console.log(imgs)

for(image of imgs){
console.log("i am working")

    console.log(image.src)
    const index = Math.floor(Math.random() * myThumb.length);
    image.src = myThumb[index];
}