// import React from "react";
import Child from "./child";
const words = ["I", "love", "final", "fantasy", "VII"]
export default function Parent() {
    return (
        <div>
            {/* <Child desc = "Just a man" name = "rick astley" imgsrc = "https://i.pinimg.com/originals/3a/6e/9e/3a6e9eb536d0298cb0bf3da5847336c0.jpg"/> */}
            <Child desc = "chocobo" key ="1" name = "Chocobo" imgsrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoe7l7m9snvnMNR8AeZkCv1wsmLrLT-c_0ouQW7DwvIA&s"></Child>

            {words.map((w) => 
                <Child desc= {w} name = {w} imgsrc="" />
            )}
        </div>
    )
}