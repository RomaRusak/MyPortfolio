
const forExample = {
    id: 'pizza8',
    name: 'Гавайская',
    withoutMushrooms: true,
    withoutOlives: true,
    withoutCucumbers: true,
    light: true,
    hot: false,
    price: '23.90',
    image: 'https://app.pzzby.com/uploads/photos/wPBXtTIyJo.jpg'
}

const data = [
    {
        id: 'pizza1Carbonad',
        idSmall: 'pizza1CarbonadSmall',
        idBig: 'pizza1CarbonadBig',
        name: 'Карбонад, салями и грудинка',
        withoutMushrooms: true,
        withoutOlives: true,
        withoutCucumbers: false,
        light: false,
        hot: false,
        price: '28.90',
        priceSmall: '26.90',
        priceBig: '34.90',
        image: 'https://app.pzzby.com/uploads/photos/7IxR77zyk5.jpg',
        composition: 'соус чеддер, варено-копченый карбонад (свинина), грудинка (свинина), варено-копченая салями, соленые огурцы, свежий лук, сыр моцарелла, базилик',
        calorific: {
            small: ['Калории 1953 ккал.', 'Углеводы 148 гр.', 'Белки 64 гр.', 'Жиры 119 гр.'],
            medium: ['Калории 2126 ккал.', 'Углеводы 179 гр.', 'Белки 68 гр.', 'Жиры 122 гр.'],
            big: ['Калории 2481 ккал.', 'Углеводы 228 гр.', 'Белки 86 гр.', 'Жиры 130 гр.']
        }
    },

    {
        id: 'pizza2PepperoniAndSausages',
        idSmall: 'pizza2PepperoniAndSausagesSmall',
        idBig: 'pizza2PepperoniAndSausagesBig',
        name: 'Пепперони и колбаски',
        withoutMushrooms: true,
        withoutOlives: false,
        withoutCucumbers: true,
        light: false,
        hot: false,
        price: '24.90',
        priceSmall: '22.90',
        priceBig: '30.90',
        image: 'https://app.pzzby.com/uploads/photos/u7ZQ0sFV87.jpg',
        composition: 'пицца-соус, пепперони, охотничьи колбаски, свежие томаты, оливки, сыр моцарелла, базилик',
        calorific: {
            small: ['Калории 1597 ккал.', 'Углеводы 142 гр.', 'Белки 61 гр.', 'Жиры 86 гр.'],
            medium: ['Калории 1770 ккал.', 'Углеводы 173 гр.', 'Белки 65 гр.', 'Жиры 88 гр.'],
            big: ['Калории 2336 ккал.', 'Углеводы 219 гр.', 'Белки 86 гр.', 'Жиры 121 гр.']
        }
    },

    {
        id: 'pizza3SalyamiChedder',
        idSmall: 'pizza3SalyamiChedderSmall',
        idBig: 'pizza3SalyamiChedderBig',
        name: 'Салями с соусом чеддер',
        withoutMushrooms: false,
        withoutOlives: true,
        withoutCucumbers: true,
        light: false,
        hot: false,
        price: '26.90',
        priceSmall: '24.90',
        priceBig: '32.90',
        image: 'https://app.pzzby.com/uploads/photos/4dFLAF0ENP.jpg',
        composition: 'соус чеддер, варено-копченая салями, маринованные опята, свежий лук, сыр моцарелла, базилик',
        calorific: {
            small: ['Калории 1785 ккал.', 'Углеводы 149 гр.', 'Белки 58 гр.', 'Жиры 104 гр.'],
            medium: ['Калории 1957 ккал.', 'Углеводы 180 гр.', 'Белки 63 гр.', 'Жиры 107 гр.'],
            big: ['Калории 2473 ккал.', 'Углеводы 228 гр.', 'Белки 81 гр.', 'Жиры 134 гр.']
        }
    },

    {
        id: 'pizza4Ranch',
        idSmall: 'pizza4RanchSmall',
        idBig: 'pizza4RanchBig',
        name: 'Ранч пицца',
        withoutMushrooms: true,
        withoutOlives: true,
        withoutCucumbers: true,
        light: false,
        hot: false,
        price: '24.90',
        priceSmall: '22.90',
        priceBig: '30.90',
        image: 'https://app.pzzby.com/uploads/photos/e2llMCLKhy.jpg',
        composition: 'американский соус ранч, филе цыпленка, ветчина, свежие томаты, сыр моцарелла, базилик',
        calorific: {
            small: ['Калории 1905 ккал.', 'Углеводы 140 гр.', 'Белки 71 гр.', 'Жиры 117 гр.'],
            medium: ['Калории 1959 ккал.', 'Углеводы 170 гр.', 'Белки 81 гр.', 'Жиры 124 гр.'],
            big: ['Калории 2239 ккал.', 'Углеводы 217 гр.', 'Белки 81 гр.', 'Жиры 115 гр.']
        }
    },

    {
        id: 'pizza5ChickenBarbecu',
        idSmall: 'pizza5ChickenBarbecuSmall',
        idBig: 'pizza5ChickenBarbecuBig',
        name: 'Цыпленок барбекю',
        withoutMushrooms: true,
        withoutOlives: true,
        withoutCucumbers: true,
        light: false,
        hot: false,
        price: '24.90',
        priceSmall: '22.90',
        priceBig: '30.90',
        image: 'https://app.pzzby.com/uploads/photos/ngWJKYs1Aq.jpg',
        composition: 'пицца-соус, грудинка (свинина), филе цыпленка, свежий лук, соус барбекю, сыр моцарелла, базилик',
        calorific: {
            small: ['Калории 1484 ккал.', 'Углеводы 140 гр.', 'Белки 66 гр.', 'Жиры 72 гр.'],
            medium: ['Калории 1519 ккал.', 'Углеводы 171 гр.', 'Белки 65 гр.', 'Жиры 62 гр.'],
            big: ['Калории 2015 ккал.', 'Углеводы 224 гр.', 'Белки 86 гр.', 'Жиры 83 гр.']
        }
    },

    {
        id: 'pizza6Bavarskaya',
        idSmall: 'pizza6BavarskayaSmall',
        idBig: 'pizza6BavarskayaBig',
        name: 'Баварская',
        withoutMushrooms: false,
        withoutOlives: true,
        withoutCucumbers: true,
        light: true,
        hot: false,
        price: '24.90',
        priceSmall: '22.90',
        priceBig: '30.90',
        image: 'https://app.pzzby.com/uploads/photos/6sIPcLXJ3b.jpg',
        composition: 'сладкий горчичный соус, охотничьи колбаски, свежие шампиньоны, свежий лук, свежие томаты, сыр моцарелла, базилик',
        calorific: {
            small: ['Калории 1565 ккал.', 'Углеводы 150 гр.', 'Белки 55 гр.', 'Жиры 81 гр.'],
            medium: ['Калории 1572 ккал.', 'Углеводы 148 гр.', 'Белки 58 гр.', 'Жиры 81 гр.'],
            big: ['Калории 2268 ккал.', 'Углеводы 237 гр.', 'Белки 71 гр.', 'Жиры 108 гр.']
        }
    },

    {
        id: 'pizza7HotChili',
        idSmall: 'pizza7HotChiliSmall',
        idBig: 'pizza7HotChiliBig',
        name: 'Острая чили',
        withoutMushrooms: true,
        withoutOlives: true,
        withoutCucumbers: true,
        light: false,
        hot: true,
        price: '28.90',
        priceSmall: '26.90',
        priceBig: '34.90',
        image: 'https://app.pzzby.com/uploads/photos/VUs6wBxVB2.jpg',
        composition: 'острый перец халапеньо, чесночный соус, сладкий соус чили, пепперони, грудинка (свинина), свежий болгарский перец, сыр моцарелла, перец кайенский',
        calorific: {
            small: ['Калории 2122 ккал.', 'Углеводы 169 гр.', 'Белки 60 гр.', 'Жиры 133 гр.'],
            medium: ['Калории 2187 ккал.', 'Углеводы 186 гр.', 'Белки 62 гр.', 'Жиры 130 гр.'],
            big: ['Калории 2874 ккал.', 'Углеводы 244 гр.', 'Белки 82 гр.', 'Жиры 172 гр.']
        }
    },

    {
        id: 'pizza8Gavayskaya',
        idSmall: 'pizza8GavayskayaSmall',
        idBig: 'pizza8GavayskayaBig',
        name: 'Гавайская',
        withoutMushrooms: true,
        withoutOlives: true,
        withoutCucumbers: true,
        light: true,
        hot: false,
        price: '24.90',
        priceSmall: '22.90',
        priceBig: '30.90',
        image: 'https://app.pzzby.com/uploads/photos/wPBXtTIyJo.jpg',
        composition: 'сырный соус, ветчина, филе цыпленка, ананасы, сыр моцарелла, базилик',
        calorific: {
            small: ['Калории 1621 ккал.', 'Углеводы 141 гр.', 'Белки 68 гр.', 'Жиры 86 гр.'],
            medium: ['Калории 1582 ккал.', 'Углеводы 173 гр.', 'Белки 73 гр.', 'Жиры 95 гр.'],
            big: ['Калории 2348 ккал.', 'Углеводы 223 гр.', 'Белки 95 гр.', 'Жиры 117 гр.']
        }
    },

    {
        id: 'pizza9Mushroom',
        idSmall: 'pizza9MushroomSmall',
        idBig: 'pizza9MushroomBig',
        name: 'Грибная',
        withoutMushrooms: false,
        withoutOlives: true,
        withoutCucumbers: true,
        light: false,
        hot: false,
        price: '24.90',
        priceSmall: '22.90',
        priceBig: '30.90',
        image: 'https://app.pzzby.com/uploads/photos/YmZn9KE6zL.jpg',
        composition: 'чесночный соус, ветчина, свежие шампиньоны, сыр моцарелла, базилик',
        calorific: {
            small: ['Калории 1535 ккал.', 'Углеводы 132 гр.', 'Белки 59 гр.', 'Жиры 83 гр.'],
            medium: ['Калории 1764 ккал.', 'Углеводы 165 гр.', 'Белки 64 гр.', 'Жиры 92 гр.'],
            big: ['Калории 2232 ккал.', 'Углеводы 212 гр.', 'Белки 83 гр.', 'Жиры 114 гр.']
        }
    },

    {
        id: 'pizza10CheeseChick',
        idSmall: 'pizza10CheeseChickSmall',
        idBig: 'pizza10CheeseChickBig',
        name: 'Сырный цыпленок',
        withoutMushrooms: true,
        withoutOlives: true,
        withoutCucumbers: true,
        light: false,
        hot: false,
        price: '24.90',
        priceSmall: '22.90',
        priceBig: '30.90',
        image: 'https://app.pzzby.com/uploads/photos/vZOMxDLfGF.jpg',
        composition: 'сырный соус, филе цыпленка, свежие томаты, сыр моцарелла, базилик, кунжут',
        calorific: {
            small: ['Калории 1744 ккал.', 'Углеводы 152 гр.', 'Белки 76 гр.', 'Жиры 93 гр.'],
            medium: ['Калории 1867 ккал.', 'Углеводы 169 гр.', 'Белки 82 гр.', 'Жиры 96 гр.'],
            big: ['Калории 2348 ккал.', 'Углеводы 216 гр.', 'Белки 103 гр.', 'Жиры 119 гр.']
        }
    },

    {
        id: 'pizza11Village',
        idSmall: 'pizza11VillageSmall',
        idBig: 'pizza11VillageBig',
        name: 'Деревенская',
        withoutMushrooms: false,
        withoutOlives: true,
        withoutCucumbers: false,
        light: false,
        hot: false,
        price: '28.90',
        priceSmall: '26.90',
        priceBig: '34.90',
        image: 'https://app.pzzby.com/uploads/photos/JMYqItJYAB.jpg',
        composition: 'американский соус ранч, грудинка (свинина), свежий лук, соленые огурцы, свежие шампиньоны, сыр моцарелла, базилик',
        calorific: {
            small: ['Калории 1801 ккал.', 'Углеводы 139 гр.', 'Белки 54 гр.', 'Жиры 111 гр.'],
            medium: ['Калории 1839 ккал.', 'Углеводы 167 гр.', 'Белки 58 гр.', 'Жиры 100 гр.'],
            big: ['Калории 2482 ккал.', 'Углеводы 217 гр.', 'Белки 76 гр.', 'Жиры 139 гр.']
        }
    },

    {
        id: 'pizza12SausageBarbecu',
        idSmall: 'pizza12SausageBarbecuSmall',
        idBig: 'pizza12SausageBarbecuBig',
        name: 'Колбаски барбекю',
        withoutMushrooms: false,
        withoutOlives: true,
        withoutCucumbers: false,
        light: false,
        hot: false,
        price: '24.90',
        priceSmall: '22.90',
        priceBig: '30.90',
        image: 'https://app.pzzby.com/uploads/photos/4Fm1N121TG.jpg',
        composition: 'пицца-соус, охотничьи колбаски, свежий лук, свежие шампиньоны, грудинка (свинина), соленые огурцы, американский соус ранч, соус барбекю, сыр моцарелла,',
        calorific: {
            small: ['Калории 1704 ккал.', 'Углеводы 157 гр.', 'Белки 57 гр.', 'Жиры 90 гр.'],
            medium: ['Калории 1717 ккал.', 'Углеводы 176 гр.', 'Белки 59 гр.', 'Жиры 80 гр.'],
            big: ['Калории 2379 ккал.', 'Углеводы 228 гр.', 'Белки 79 гр.', 'Жиры 121 гр.']
        }
    },

    {
        id: 'pizza13GarlicChicken',
        idSmall: 'pizza13GarlicChickenSmall',
        idBig: 'pizza13GarlicChickenBig',
        name: 'Чесночный цыпленок',
        withoutMushrooms: true,
        withoutOlives: true,
        withoutCucumbers: true,
        light: false,
        hot: false,
        price: '24.90',
        priceSmall: '22.90',
        priceBig: '30.90',
        image: 'https://app.pzzby.com/uploads/photos/O9F0NpkejZ.jpg',
        composition: 'чесночный соус, филе цыпленка, грудинка (свинина), свежие томаты, сыр моцарелла, базилик',
        calorific: {
            small: ['Калории 1499 ккал.', 'Углеводы 139 гр.', 'Белки 86 гр.', 'Жиры 80 гр.'],
            medium: ['Калории 1799 ккал.', 'Углеводы 132 гр.', 'Белки 66 гр.', 'Жиры 110 гр.'],
            big: ['Калории 2464 ккал.', 'Углеводы 211 гр.', 'Белки 86 гр.', 'Жиры 139 гр.']
        }
    },

    {
        id: 'pizza14FrenchChicken',
        idSmall: 'pizza14FrenchChickenSmall',
        idBig: 'pizza14FrenchChickenBig',
        name: 'Французский цыпленок',
        withoutMushrooms: true,
        withoutOlives: false,
        withoutCucumbers: true,
        light: false,
        hot: false,
        price: '24.90',
        priceSmall: '22.90',
        priceBig: '30.90',
        image: 'https://app.pzzby.com/uploads/photos/UpVgrLdhUo.jpg',
        composition: 'грибной соус, филе цыпленка, свежие шампиньоны, свежий лук, сыр моцарелла, базилик',
        calorific: {
            small: ['Калории 1573 ккал.', 'Углеводы 134 гр.', 'Белки 75 гр.', 'Жиры 75 гр.'],
            medium: ['Калории 1802 ккал.', 'Углеводы 164 гр.', 'Белки 77 гр.', 'Жиры 84 гр.'],
            big: ['Калории 2283 ккал.', 'Углеводы 211 гр.', 'Белки 100 гр.', 'Жиры 104 гр.']
        }
    },

    {
        id: 'pizza15Italy',
        idSmall: 'pizza15ItalySmall',
        idBig: 'pizza15ItalyBig',
        name: 'Итальянская',
        withoutMushrooms: false,
        withoutOlives: false,
        withoutCucumbers: true,
        light: false,
        hot: false,
        price: '24.90',
        priceSmall: '22.90',
        priceBig: '30.90',
        image: 'https://app.pzzby.com/uploads/photos/WwFjgGFOy7.jpg',
        composition: 'пицца-соус, пепперони, свежие шампиньоны, грудинка (свинина), маслины, сыр моцарелла, базилик',
        calorific: {
            small: ['Калории 1587 ккал.', 'Углеводы 130 гр.', 'Белки 59 гр.', 'Жиры 91 гр.'],
            medium: ['Калории 1671 ккал.', 'Углеводы 157 гр.', 'Белки 60 гр.', 'Жиры 85 гр.'],
            big: ['Калории 2253 ккал.', 'Углеводы 202 гр.', 'Белки 79 гр.', 'Жиры 120 гр.']
        }
    },

    {
        id: 'pizza16SausageHamMushroom',
        idSmall: 'pizza16SausageHamMushroomSmall',
        idBig: 'pizza16SausageHamMushroomBig',
        name: 'Салями, ветчина и грибы',
        withoutMushrooms: false,
        withoutOlives: true,
        withoutCucumbers: true,
        light: false,
        hot: false,
        price: '24.90',
        priceSmall: '22.90',
        priceBig: '30.90',
        image: 'https://app.pzzby.com/uploads/photos/go1r3i7kZm.jpg',
        composition: 'пицца-соус, свежие шампиньоны, варено-копченая салями, ветчина, сыр моцарелла, базилик',
        calorific: {
            small: ['Калории 1388 ккал.', 'Углеводы 141 гр.', 'Белки 62 гр.', 'Жиры 61 гр.'],
            medium: ['Калории 1589 ккал.', 'Углеводы 173 гр.', 'Белки 69 гр.', 'Жиры 66 гр.'],
            big: ['Калории 2084 ккал.', 'Углеводы 218 гр.', 'Белки 92 гр.', 'Жиры 90 гр.']
        }
    },

    {
        id: 'pizza17BifTasty',
        idSmall: 'pizza17BifTastySmall',
        idBig: 'pizza17BifTastyBig',
        name: 'Биф тейсти',
        withoutMushrooms: true,
        withoutOlives: true,
        withoutCucumbers: true,
        light: false,
        hot: false,
        price: '24.90',
        priceSmall: '22.90',
        priceBig: '30.90',
        image: 'https://app.pzzby.com/uploads/photos/1F7id2DTCz.jpg',
        composition: 'соус гриль, грудинка (свинина), фарш (говядина), свежие томаты, листья салата, свежий лук, сыр моцарелла, базилик, кунжут',
        calorific: {
            small: ['Калории 1775 ккал.', 'Углеводы 153 гр.', 'Белки 60 гр.', 'Жиры 120 гр.'],
            medium: ['Калории 1831 ккал.', 'Углеводы 169 гр.', 'Белки 61 гр.', 'Жиры 99 гр.'],
            big: ['Калории 2425 ккал.', 'Углеводы 216 гр.', 'Белки 83 гр.', 'Жиры 135 гр.']
        }
    },

    {
        id: 'pizza18FourSeasons',
        idSmall: 'pizza18FourSeasonsSmall',
        idBig: 'pizza18FourSeasonsBig',
        name: 'Кантри четыре сезона',
        withoutMushrooms: false,
        withoutOlives: true,
        withoutCucumbers: true,
        light: false,
        hot: false,
        price: '28.90',
        priceSmall: '26.90',
        priceBig: '34.90',
        image: 'https://app.pzzby.com/uploads/photos/t0Vp8VHSgL.jpg',
        composition: 'грибной соус, варено-копченый карбонад (свинина), грудинка (свинина), маринованные опята, сыр фета, сыр дорблю, сыр моцарелла, базилик',
        calorific: {
            small: ['Калории 1953 ккал.', 'Углеводы 146 гр.', 'Белки 76 гр.', 'Жиры 110 гр.'],
            medium: ['Калории 2087 ккал.', 'Углеводы 166 гр.', 'Белки 78 гр.', 'Жиры 115 гр.'],
            big: ['Калории 2658 ккал.', 'Углеводы 210 гр.', 'Белки 103 гр.', 'Жиры 147 гр.']
        }
    },

    {
        id: 'pizza19ChickenDorblu',
        idSmall: 'pizza19ChickenDorbluSmall',
        idBig: 'pizza19ChickenDorbluBig',
        name: 'Цыпленок дорблю',
        withoutMushrooms: true,
        withoutOlives: true,
        withoutCucumbers: true,
        light: false,
        hot: false,
        price: '28.90',
        priceSmall: '26.90',
        priceBig: '34.90',
        image: 'https://app.pzzby.com/uploads/photos/pogU0diHlR.jpg',
        composition: 'сырный соус,филе цыпленка, сыр дорблю (может отличаться от изображения на сайте), сыр моцарелла, базилик',
        calorific: {
            small: ['Калории 1946 ккал.', 'Углеводы 149 гр.', 'Белки 89 гр.', 'Жиры 111 гр.'],
            medium: ['Калории 2084 ккал.', 'Углеводы 163 гр.', 'Белки 91 гр.', 'Жиры 117 гр.'],
            big: ['Калории 2659 ккал.', 'Углеводы 209 гр.', 'Белки 119 гр.', 'Жиры 148 гр.']
        }
    },

    {
        id: 'pizza20Meaty',
        idSmall: 'pizza20MeatySmall',
        idBig: 'pizza20MeatyBig',
        name: 'Мясная',
        withoutMushrooms: true,
        withoutOlives: true,
        withoutCucumbers: true,
        light: false,
        hot: false,
        price: '28.90',
        priceSmall: '26.90',
        priceBig: '34.90',
        image: 'https://app.pzzby.com/uploads/photos/Kyi59Laqiy.jpg',
        composition: 'пицца-соус, пепперони, ветчина, фарш (говядина), грудинка (свинина), сыр моцарелла, базилик',
        calorific: {
            small: ['Калории 1687 ккал.', 'Углеводы 142 гр.', 'Белки 71 гр.', 'Жиры 92 гр.'],
            medium: ['Калории 1770 ккал.', 'Углеводы 159 гр.', 'Белки 73 гр.', 'Жиры 91 гр.'],
            big: ['Калории 2379 ккал.', 'Углеводы 205 гр.', 'Белки 99 гр.', 'Жиры 127 гр.']
        }
    },

    {
        id: 'pizza21FourCheese',
        idSmall: 'pizza21FourCheeseSmall',
        idBig: 'pizza21FourCheeseBig',
        name: 'Четыре сыра',
        withoutMushrooms: true,
        withoutOlives: true,
        withoutCucumbers: true,
        light: false,
        hot: false,
        price: '28.90',
        priceSmall: '26.90',
        priceBig: '34.90',
        image: 'https://app.pzzby.com/uploads/photos/Cm7Kcw7XTT.jpg',
        composition: 'сырный соус, сливочный сыр, сыр фета, сыр дорблю (может отличаться от изображения на сайте), сыр моцарелла, базилик',
        calorific: {
            small: ['Калории 1895 ккал.', 'Углеводы 152 гр.', 'Белки 64 гр.', 'Жиры 115 гр.'],
            medium: ['Калории 2033 ккал.', 'Углеводы 166 гр.', 'Белки 66 гр.', 'Жиры 121 гр.'],
            big: ['Калории 2642 ккал.', 'Углеводы 213 гр.', 'Белки 88 гр.', 'Жиры 158 гр.']
        }
    },

    {
        id: 'pizza22Philadelphia',
        idSmall: 'pizza22PhiladelphiaSmall',
        idBig: 'pizza22PhiladelphiaBig',
        name: 'Филадельфия',
        withoutMushrooms: true,
        withoutOlives: true,
        withoutCucumbers: true,
        light: false,
        hot: false,
        price: '26.90',
        priceSmall: '24.90',
        priceBig: '32.90',
        image: 'https://app.pzzby.com/uploads/photos/b95YyJFUmp.jpg',
        composition: 'пицца-соус, филе лосося слабосоленое, сыр фета, лимон, свежие томаты, сыр моцарелла, базилик',
        calorific: {
            small: ['Калории 1343 ккал.', 'Углеводы 131 гр.', 'Белки 72 гр.', 'Жиры 57 гр.'],
            medium: ['Калории 1427 ккал.', 'Углеводы 162 гр.', 'Белки 64 гр.', 'Жиры 55 гр.'],
            big: ['Калории 1889 ккал.', 'Углеводы 214 гр.', 'Белки 85 гр.', 'Жиры 74 гр.']
        }
    }, 

    {
        id: 'pizza23MushroomChicken',
        idSmall: 'pizza23MushroomChickenSmall',
        idBig: 'pizza23MushroomChickenBig',
        name: 'Грибной цыпленок',
        withoutMushrooms: false,
        withoutOlives: true,
        withoutCucumbers: false,
        light: false,
        hot: false,
        price: '26.90',
        priceSmall: '24.90',
        priceBig: '32.90',
        image: 'https://app.pzzby.com/uploads/photos/Vfwgt0qh5U.jpg',
        composition: 'американский соус ранч, филе цыпленка, ветчина, свежие шампиньоны, сыр фета, сладкий горчичный соус, сыр моцарелла, базилик',
        calorific: {
            small: ['Калории 1755 ккал.', 'Углеводы 166 гр.', 'Белки 76 гр.', 'Жиры 86 гр.'],
            medium: ['Калории 1951 ккал.', 'Углеводы 176 гр.', 'Белки 70 гр.', 'Жиры 105 гр.'],
            big: ['Калории 2557 ккал.', 'Углеводы 229 гр.', 'Белки 95 гр.', 'Жиры 137 гр.']
        }
    },

    {
        id: 'pizza24GrillChicken',
        idSmall: 'pizza24GrillChickenSmall',
        idBig: 'pizza24GrillChickenBig',
        name: 'Цыпленок с соусом гриль',
        withoutMushrooms: true,
        withoutOlives: true,
        withoutCucumbers: true,
        light: false,
        hot: false,
        price: '26.90',
        priceSmall: '24.90',
        priceBig: '32.90',
        image: 'https://app.pzzby.com/uploads/photos/hCMeASk1nA.jpg',
        composition: 'соус гриль, филе цыпленка, грудинка (свинина), свежий болгарский перец, свежий лук, сыр моцарелла, базилик',
        calorific: {
            small: ['Калории 1817 ккал.', 'Углеводы 149 гр.', 'Белки 67 гр.', 'Жиры 104 гр.'],
            medium: ['Калории 1807 ккал.', 'Углеводы 181 гр.', 'Белки 71 гр.', 'Жиры 87 гр.'],
            big: ['Калории 2277 ккал.', 'Углеводы 230 гр.', 'Белки 92 гр.', 'Жиры 107 гр.']
        }
    },

    {
        id: 'pizza25Ukraine',
        idSmall: 'pizza25SmallUkraine',
        idBig: 'pizza25UkraineBig',
        name: 'Украинская',
        withoutMushrooms: true,
        withoutOlives: true,
        withoutCucumbers: false,
        light: false,
        hot: false,
        price: '26.90',
        priceSmall: '24.90',
        priceBig: '32.90',
        image: 'https://app.pzzby.com/uploads/photos/qiGJqYpn7j.jpg',
        composition: 'чесночный соус, грудинка (свинина), ветчина, свежий лук, соленые огурцы, сладкий горчичный соус, сыр моцарелла, базилик',
        calorific: {
            small: ['Калории 1849 ккал.', 'Углеводы 144 гр.', 'Белки 133 гр.', 'Жиры 57 гр.'],
            medium: ['Калории 1802 ккал.', 'Углеводы 172 гр.', 'Белки 61 гр.', 'Жиры 92 гр.'],
            big: ['Калории 2429 ккал.', 'Углеводы 225 гр.', 'Белки 80 гр.', 'Жиры 128 гр.']
        }
    },

    {
        id: 'pizza26Pepperoni',
        idSmall: 'pizza26PepperoniSmall',
        idBig: 'pizza26PepperoniBig',
        name: 'Пепперони',
        withoutMushrooms: true,
        withoutOlives: true,
        withoutCucumbers: true,
        light: false,
        hot: false,
        price: '26.90',
        priceSmall: '24.90',
        priceBig: '32.90',
        image: 'https://app.pzzby.com/uploads/photos/pqyqzfJTVP.jpg',
        composition: 'пицца-соус, пепперони, сыр моцарелла, базилик',
        calorific: {
            small: ['Калории 2016 ккал.', 'Углеводы 140 гр.', 'Белки 82 гр.', 'Жиры 124 гр.'],
            medium: ['Калории 2099 ккал.', 'Углеводы 157 гр.', 'Белки 84 гр.', 'Жиры 123 гр.'],
            big: ['Калории 2211 ккал.', 'Углеводы 157 гр.', 'Белки 87 гр.', 'Жиры 135 гр.']
        }
    },

    {
        id: 'pizza27Vegetarian',
        idSmall: 'pizza27VegetarianSmall',
        idBig: 'pizza27VegetarianBig',
        name: 'Вегетарианская',
        withoutMushrooms: false,
        withoutOlives: false,
        withoutCucumbers: true,
        light: true,
        hot: false,
        price: '26.90',
        priceSmall: '24.90',
        priceBig: '32.90',
        image: 'https://app.pzzby.com/uploads/photos/vSWgoAlbtt.jpg',
        composition: 'пицца-соус, свежие томаты, свежие шампиньоны, свежий болгарский перец, сыр фета, маслины, сыр моцарелла, базилик',
        calorific: {
            small: ['Калории 1265 ккал.', 'Углеводы 146 гр.', 'Белки 55 гр.', 'Жиры 50 гр.'],
            medium: ['Калории 1439 ккал.', 'Углеводы 177 гр.', 'Белки 60 гр.', 'Жиры 53 гр.'],
            big: ['Калории 1862 ккал.', 'Углеводы 226 гр.', 'Белки 78 гр.', 'Жиры 70 гр.']
        }
    }
]

export default data