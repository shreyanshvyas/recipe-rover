import React from 'react'
import Search from '../Search'
import Cards from '../Cards1'
import Salad from "../../assets/card/Salad.jpg"
import Vegeterian from "../../assets/card/Vegeterian.jpg"
import NonVeg from "../../assets/card/NonVeg.jpg"
import Cuisines from "../../assets/card/Cuisines.jpg"
import Vegan from "../../assets/card/Vegan.jpg"
import Beverages from "../../assets/card/Beverages.jpeg"
import Soups from "../../assets/card/Soups.jpg"
import Desserts from "../../assets/card/Desserts.jpeg"
import Books from "../../assets/card/Books.jpg"
import Favorites from "../../assets/card/Favorites.jpg"
import Upload from "../../assets/card/Uploads.jpeg"
import User from "../../assets/card/User.jpg"

function Explore() {
  const Categories = [
    { 
        image: Vegeterian,
        name:"Vegeterian",
        link: "/categories/diet/lacto-vegeterian",
    },
    { 
        image:NonVeg,
        name:"Non-Vegeterian",
        link: "/categories/diet/primal",
    },
    { 
        image:Vegan,
        name:"Vegan",
        link: "/categories/diet/vegan",
    },
    { 
        image:Cuisines,
        name:"Cuisines",
        link: "/categories/cuisines",
    },
    { 
        image:Salad,
        name:"Salads",
        link: "/categories/type/salad",
    },
    { 
        image:Beverages,
        name:"Beverages",
        link: "/categories/type/beverage",
    },
    { 
        image:Soups,
        name:"Soups",
        link: "/categories/type/soup",
    },
    { 
        image:Desserts,
        name:"Desserts",
        link: "/categories/type/desserts",
    },
    { 
        image:Books,
        name:"Recipe Books",
        link: "/community/user/books",
    },
    { 
        image:User,
        name:"Community",
        link: "/user/viewrecipe",
    },
    { 
        image:Upload,
        name:"Upload Your's",
        link: "/user/postrecipe",
    },
    { 
        image:Favorites,
        name:"Your Favorites",
        link: "/community/user/favorites",
    },
]
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className="w-full flex flex-col lg:flex-row text-white bg-zinc-900">
        <div className="lg:w-[60vw] w-full px-4">
            <h1 className="text-2xl lg:text-4xl text-center items-center justify-center pt-8 lg:pt-16 font-bold">
                Your everyday question of what to cook today will be answered here.
            </h1>
            <div className="mt-4">
                <Search currentpage="home" id="search" />
            </div>
            <h2 className="pt-8 lg:pt-16 text-xl lg:text-3xl text-center font-bold uppercase"> Browse from categories..</h2>
            <div className="p-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {Categories.map(({image, name, link}, index) => (
                    <Cards key={index} image={image} name={name} link={link} /> 
                ))}
            </div>
        </div>
        <div className="relative image lg:w-[40vw] w-full flex flex-col overflow-hidden mt-8 lg:mt-0">
            <img src="./src/assets/fridge.jpg" alt="food" className="absolute w-full h-full z-1 opacity-60 brightness-90" loading="lazy" />
            <div className="flex items-center justify-center w-full h-full">
                <div className="uppercase absolute top-20 lg:top-40 ml-2 lg:ml-6 text-[10vw] lg:text-[15vw] leading-none font-light font-['Founders_Grotesk_X_Condensed'] text-[#F8FAE5]"> What's in your fridge? </div>
            </div>
        </div>
    </div>
  )
}

export default Explore
