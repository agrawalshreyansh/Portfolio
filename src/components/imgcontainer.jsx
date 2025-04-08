import Navbar from "./navbar";
import Skills from "./skills";

const MyImage = () => {
    return (
        <>
            <div className="flex h-[70vh] w-full bg-[#dad7cd]">
                <div className="w-[40%] h-[100%] flex items-center justify-center">
                    <img
                        src="mypic.webp"
                        className="h-[75%] w-[75%] rounded-full border-2 border-amber-300 object-cover"
                    />
                </div>
                <div className="flex flex-col w-[60%]">
                    <Navbar />
                    <Skills />
                </div>
            </div>
        </>
    )
}


export default MyImage;