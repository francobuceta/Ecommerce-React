/* const formatPrice = (num) => {
    return new Intl.NumberFormat("ES-AR", {
        style: "currency",
        currency: "ARG"
    })
    .format(num);
} */

export const products = [
    {
        id: "001",
        title: "Dallas Mavericks - Luka Dončić #77",
        price: 8000,
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668303359/ecommerce/jersey-nba-nike-authentic-75-aniversario-2122-dallas1-757b348074ba2a059f16360467000424-480-0_i4siqd.png",
        pictureUrlLarge: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668303359/ecommerce/jersey-nba-nike-authentic-75-aniversario-2122-dallas1-757b348074ba2a059f16360467000424-1024-1024_o2m7nl.png",
        description: "Camiseta NBA Luka Dončić Nro.77 - Dallas Mavericks Nike Swingman Azul",
        stock: 0,
        category: "camisetas"
    },
    {
        id: "002",
        title: "Boston Celtics - Jayson Tatum #0",
        price: 7800,
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668380433/ecommerce/67749f0d1-bebe84ccd75a25949416385828423060-480-0_j7pvav.jpg",
        pictureUrlLarge: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668380433/ecommerce/67749f0d1-bebe84ccd75a25949416385828423060-1024-1024_uo7tzb.jpg",
        description: "Camiseta NBA Jayson Tatum Nro.0 - Boston Celtics Nike Authentic 75º Anniversary 21/22",
        stock: 6,
        category: "camisetas"
    },
    {
        id: "003",
        title: "Bucks - Giannis Antetokounmpo #43",
        price: 8100,
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668303358/ecommerce/324a395e1-11efe773e6dfcdc29716589568235623-480-0_aemkm4.jpg",
        pictureUrlLarge: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668303359/ecommerce/324a395e1-11efe773e6dfcdc29716589568235623-1024-1024_zndshx.jpg",
        description: "Camiseta NBA Giannis Antetokounmpo Nro.34 - Milwaukee Bucks Nike Swingman 75º Anniversary Blanca",
        stock: 5,
        category: "camisetas"
    },
    {
        id: "004",
        title: "Los Ángeles Lakers - Lebron James #23",
        price: 8100,
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668380434/ecommerce/regata-nba-nike-swingman-los-angeles-lakers-golden-edition-james-231-026fc38b2ad5cfe3dd15913113451648-480-0_fwdtbu.jpg",
        pictureUrlLarge: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668380435/ecommerce/regata-nba-nike-swingman-los-angeles-lakers-golden-edition-james-231-026fc38b2ad5cfe3dd15913113451648-1024-1024_trkrqo.jpg",
        description: "Camiseta NBA Lebron James Nro.23 - Los Ángeles Lakers Nike Swingman Golden Edition",
        stock: 5,
        category: "camisetas"
    },
    {
        id: "005",
        title: "L.A Clippers - Kawhi Leonard #2",
        price: 7300,
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668380433/ecommerce/jersey-nba-nike-authentic-75-aniversario-2122-clippers1-82426e58110814839916360468441244-480-0_mqqceo.jpg",
        pictureUrlLarge: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668380435/ecommerce/jersey-nba-nike-authentic-75-aniversario-2122-clippers1-82426e58110814839916360468441244-1024-1024_m3whsm.jpg",
        description: "Camiseta NBA Kawhi Leonard Nro.2 - L.A Clippers Nike Autenthic 75º Aniversary 21/22",
        stock: 5,
        category: "camisetas"
    },
    {
        id: "006",
        title: "Charlotte Hornets - Lamelo Ball #2",
        price: 7300,
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668303359/ecommerce/797de9d71-bbbc545e37d3fd8df916387977210863-480-0_nvmiqx.jpg",
        pictureUrlLarge: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668303358/ecommerce/797de9d71-bbbc545e37d3fd8df916387977210863-1024-1024_mnxcjk.jpg",
        description: "Camiseta NBA Lamelo Ball Nro.2 - Charlotte Hornets Nike Swingman 20/21",
        stock: 5,
        category: "camisetas"
    },
    {
        id: "007",
        title: "Brooklin Nets - Kevin Durant #7",
        price: 7300,
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668380433/ecommerce/d76b758d1-edc04a05f1f39de8ce16215199037042-480-0_w3cets.jpg",
        pictureUrlLarge: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668380434/ecommerce/d76b758d1-edc04a05f1f39de8ce16215199037042-1024-1024_wbm1zo.jpg",
        description: "Camiseta NBA Kevin Durant Nro.7 - Brooklin Nets Nike Swingman Bed-Stuy 20/21",
        stock: 5,
        category: "camisetas"
    },
    {
        id: "008",
        title: "Chicago Bulls - Michael Jordan #23",
        price: 7300,
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668380435/ecommerce/regata-nba-nike-swingman-chicago-bulls-preta-jordan-231-d1e8f16395a699abc515914104636839-480-0_xery0r.jpg",
        pictureUrlLarge: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668380435/ecommerce/regata-nba-nike-swingman-chicago-bulls-preta-jordan-231-d1e8f16395a699abc515914104636839-1024-1024_pqddgn.jpg",
        description: "Camiseta NBA Michael Jordan Nro.23 - Chicago Bulls Nike Swingman Negra",
        stock: 5,
        category: "camisetas"
    },
    {
        id: "009",
        title: "Miami Heat - Bam Adebayo #13",
        price: 7300,
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668303359/ecommerce/f033d9551-338d0d24c80febfba816387991838256-480-0_p0fjtb.jpg",
        pictureUrlLarge: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668303359/ecommerce/f033d9551-338d0d24c80febfba816387991838256-1024-1024_gov1iy.jpg",
        description: "Camiseta NBA Bam Adebayo Nro.13 - Miami Heat Nike City Edition Negra",
        stock: 5,
        category: "camisetas"
    },
    {
        id: "010",
        title: "Portland Blazers - Damian Lillard #0",
        price: 7300,
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668303359/ecommerce/jersey-nba-nike-authentic-75-aniversario-2122-portland1-fb405175b49e9e897c16360467503748-480-0_ej3iph.jpg",
        pictureUrlLarge: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668303360/ecommerce/jersey-nba-nike-authentic-75-aniversario-2122-portland1-fb405175b49e9e897c16360467503748-1024-1024_psjljo.jpg", 
        description: "Camiseta NBA Bam Adebayo Nro.0 - Portland Blazers Nike Swingman Negra",
        stock: 5,
        category: "camisetas"
    },
    {
        id: "011",
        title: "Brooklin Nets - Kyrie Irving #11",
        price: 7300,
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668380434/ecommerce/regata-nba-nike-swingman-brooklyn-nets-preta-irving-111-007acd6282baf56ef315914044852834-480-0_tzfjqr.jpg",
        pictureUrlLarge: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668380435/ecommerce/regata-nba-nike-swingman-brooklyn-nets-preta-irving-111-007acd6282baf56ef315914044852834-1024-1024_ygcqxi.jpg",
        description: "Camiseta NBA Kyrie Irving Nro.11 - Brooklin Nets Nike Swingman Negra",
        stock: 5,
        category: "camisetas"
    },
    {
        id: "012",
        title: "Philadelphia 76ers - James Harden #1",
        price: 7300,
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668303361/ecommerce/whatsapp-image-2022-02-18-at-14-44-201-7e59cb3d03b834610416452121218511-480-0_iesg7z.jpg",
        pictureUrlLarge: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668303361/ecommerce/whatsapp-image-2022-02-18-at-14-44-201-7e59cb3d03b834610416452121218511-1024-1024_ftmtar.jpg",
        description: "Camiseta NBA James Harden Nro.1 - Philadelphia 76ers Nike Swingman City Edition 21/22",
        stock: 5,
        category: "camisetas"
    },
    {
        id: "013",
        title: "Boston Celtics - Buzo",
        price: 1000,
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1667602938/ecommerce/buzo-boston-removebg-preview_uka1mz.jpg",
        pictureUrlLarge: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668462798/ecommerce/54c01f5c1-1f8c9a8846da6a7eaa15917161069118-1024-1024_x5uoib.jpg",
        description: "Buzo Thermaflex Showtime - Boston Celtics",
        stock: 5,
        category: "buzos"
    },
    {
        id: "014",
        title: "Brooklin Nets - Buzo",
        price: 1010,
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1667602938/ecommerce/buzo-brooklin-removebg-preview_cwu2bg.jpg",
        pictureUrlLarge: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668462798/ecommerce/52111c711-b3953e23c4885f070815917162061180-1024-1024_gm6yvl.jpg",
        description: "Buzo Thermaflex Showtime - Brooklin Nets",
        stock: 5,
        category: "buzos"
    },
    {
        id: "015",
        title: "Charlotte Hornets - Buzo",
        price: 1015,
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1667602938/ecommerce/buzo-hornets-removebg-preview_zlrpf4.jpg",
        pictureUrlLarge: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668462798/ecommerce/6574ac8e1-fe253c858bbc3e6af715917159221259-1024-1024_yao7l8.jpg",
        description: "Buzo Thermaflex Showtime - Charlotte Hornets",
        stock: 5,
        category: "buzos"
    },
    {
        id: "016",
        title: "Atlanta Hawks - Buzo",
        price: 1015,
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1667602938/ecommerce/buzo-hawks-removebg-preview_ow19e4.jpg",
        pictureUrlLarge: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668462798/ecommerce/af2da8ad1-e097bfd3211ef4003115917161516895-1024-1024_lmkgus.jpg",
        description: "Buzo Thermaflex Showtime - Atlanta Hawks",
        stock: 5,
        category: "buzos"
    },
    {
        id: "017",
        title: "Los Ángeles Lakers - Buzo",
        price: 1020,
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1667602938/ecommerce/buzo-lakers-removebg-preview_owkrqf.jpg",
        pictureUrlLarge: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668462797/ecommerce/409bd20d1-62b4289bbdfda2fd2815917102866990-1024-1024_adu5si.jpg",
        description: "Buzo Thermaflex Showtime - Los Ángeles Lakers",
        stock: 5,
        category: "buzos"
    },
    {
        id: "020",
        title: "Chicago Bulls - Bermuda",
        price: 7500,
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1667602939/ecommerce/short-bulls-removebg-preview_dpdvl7.jpg",
        pictureUrlLarge: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668469801/ecommerce/thumb-151-907ddc1be03f6909e015489564747389-1024-10241-d399ed25e9e2f488cf15922507248387-1024-1024_dippqa.jpg",
        description: "Short Rojo Nike - Chicago Bulls",
        stock: 5,
        category: "bermudas"
    },
    {
        id: "021",
        title: "Boston Celtics - Bermuda",
        price: 7000,
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1667602939/ecommerce/short-celtics-removebg-preview_ggokbz.jpg",
        pictureUrlLarge: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668469801/ecommerce/thumb-41-22a77dbc594bb2c8b015489294516940-1024-10241-fb7a77835ecc6be7d115922506931503-1024-1024_x8sqkj.jpg",
        description: "Short Verde Nike - Boston Celtics",
        stock: 5,
        category: "bermudas"
    },
    {
        id: "022",
        title: "Houston Rockets - Bermuda",
        price: 6900,
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1667602939/ecommerce/short-houston-removebg-preview_bxaors.jpg",
        pictureUrlLarge: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668469801/ecommerce/thumb-531-8e68313a8f939a7b0f15489703130397-1024-10241-8442abf4287810b87e15922508053051-1024-1024_cswdwx.jpg",
        description: "Short Rojo Nike - Houston Rockets",
        stock: 5,
        category: "bermudas"
    },
    {
        id: "023",
        title: "L.A. Lakers - Bermuda",
        price: 7200,
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1667602939/ecommerce/short-lakers-removebg-preview_ve6ndy.jpg",
        pictureUrlLarge: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668469801/ecommerce/thumb-541-ad9bfff4ac013e6b0915489727325957-1024-10241-7d556edd4fa6361edd15922507679836-1024-1024_qo1joc.jpg",
        description: "Short Amarillo Nike - Los Ángeles Lakers",
        stock: 5,
        category: "bermudas"
    },
    {
        id: "024",
        title: "Miami Heat - Bermuda",
        price: 7000,
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1667602939/ecommerce/short-miami-removebg-preview_rvdixo.jpg",
        pictureUrlLarge: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1668469801/ecommerce/thumb-471-9d21415e43756292b715491190513535-1024-10241-9d622b19a22d14ccd015922511248089-1024-1024_iszqxl.jpg",
        description: "Short Negro Nike - Miami Heat",
        stock: 5,
        category: "bermudas"
    },
]