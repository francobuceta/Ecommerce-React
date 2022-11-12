const formatNumber = (number) => {
    return new Intl.NumberFormat("ES-AR", {
        style: "currency",
        currency: "ARG"
    })
    .format(number);
}

export const products = [
    {
        id: "001",
        title: "Chicago Bulls - DeMar DeRozan #11",
        price: formatNumber(8000),
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1667602939/ecommerce/chicago-bulls-derozan_a1mzku.jpg",
        description: "Camiseta NBA DeMar DeRozan Nro.11 - Chicago Bulls City Edition 21/22",
        stock: 0,
        category: "camisetas"
    },
    {
        id: "002",
        title: "Golden State - Draymond Green #23",
        price: formatNumber(7800),
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1667602939/ecommerce/golden-state-green_a6rum9.jpg",
        description: "Camiseta NBA Draymond Green Nro.23 - Golden State Warriors City Edition 21/22",
        stock: 6,
        category: "camisetas"
    },
    {
        id: "003",
        title: "Bucks - Giannis Antetokounmpo #43",
        price: formatNumber(8100),
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1667602938/ecommerce/bucks-gianis_gmv497.jpg",
        description: "Camiseta NBA Giannis Antetokounmpo Nro.34 - Milwaukee Bucks Preta",
        stock: 5,
        category: "camisetas"
    },
    {
        id: "004",
        title: "Los Ángeles Lakers - Lebron James #6",
        price: formatNumber(8100),
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1667602939/ecommerce/lakers-james_lzjzkt.jpg",
        description: "Camiseta NBA Lebron James Nro.6 -  Brooklin Nets Preta",
        stock: 5,
        category: "camisetas"
    },
    {
        id: "005",
        title: "Timberwolves - D'Angelo Russell #0",
        price: formatNumber(7300),
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1667602939/ecommerce/wolves-russel_djefhu.jpg",
        description: "Camiseta NBA D'Angelo Russell Nro.0 -  Minnesota Timberwolves City Edition 21/22",
        stock: 5,
        category: "camisetas"
    },
    {
        id: "006",
        title: "Boston Celtics - Buzo",
        price: formatNumber(10000),
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1667602938/ecommerce/buzo-boston-removebg-preview_uka1mz.jpg",
        description: "Buzo Thermaflex Showtime -  Boston Celtics",
        stock: 5,
        category: "buzos"
    },
    {
        id: "007",
        title: "Brooklin Nets - Buzo",
        price: formatNumber(10100),
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1667602938/ecommerce/buzo-brooklin-removebg-preview_cwu2bg.jpg",
        description: "Buzo Thermaflex Showtime -  Brooklin Nets",
        stock: 5,
        category: "buzos"
    },
    {
        id: "008",
        title: "Charlotte Hornets - Buzo",
        price: formatNumber(10150),
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1667602938/ecommerce/buzo-hornets-removebg-preview_zlrpf4.jpg",
        description: "Buzo Thermaflex Showtime -  Charlotte Hornets",
        stock: 5,
        category: "buzos"
    },
    {
        id: "009",
        title: "Atlanta Hawks - Buzo",
        price: formatNumber(10150),
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1667602938/ecommerce/buzo-hawks-removebg-preview_ow19e4.jpg",
        description: "Buzo Thermaflex Showtime -  Atlanta Hawks",
        stock: 5,
        category: "buzos"
    },
    {
        id: "010",
        title: "Los Ángeles Lakers - Buzo",
        price: formatNumber(10200),
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1667602938/ecommerce/buzo-lakers-removebg-preview_owkrqf.jpg",
        description: "Buzo Thermaflex Showtime -  Los Ángeles Lakers",
        stock: 5,
        category: "buzos"
    },
    {
        id: "011",
        title: "Chicago Bulls - Short",
        price: formatNumber(7500),
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1667602939/ecommerce/short-bulls-removebg-preview_dpdvl7.jpg",
        description: "Short Rojo Nike -  Chicago Bulls",
        stock: 5,
        category: "bermudas"
    },
    {
        id: "012",
        title: "Boston Celtics - Short",
        price: formatNumber(7000),
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1667602939/ecommerce/short-celtics-removebg-preview_ggokbz.jpg",
        description: "Short Verde Nike -  Boston Celtics",
        stock: 5,
        category: "bermudas"
    },
    {
        id: "013",
        title: "Houston Rockets - Short",
        price: formatNumber(6900),
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1667602939/ecommerce/short-houston-removebg-preview_bxaors.jpg",
        description: "Short Rojo Nike -  Houston Rockets",
        stock: 5,
        category: "bermudas"
    },
    {
        id: "014",
        title: "L.A. Lakers - Short",
        price: formatNumber(7200),
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1667602939/ecommerce/short-lakers-removebg-preview_ve6ndy.jpg",
        description: "Short Amarillo Nike -  Los Ángeles Lakers",
        stock: 5,
        category: "bermudas"
    },
    {
        id: "015",
        title: "Miami Heat - Short",
        price: formatNumber(7000),
        pictureUrl: "https://res.cloudinary.com/dzm5lgpyv/image/upload/v1667602939/ecommerce/short-miami-removebg-preview_rvdixo.jpg",
        description: "Short Negro Nike -  Miami Heat",
        stock: 5,
        category: "bermudas"
    },
]