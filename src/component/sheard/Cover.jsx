import { ParallaxProvider } from "react-scroll-parallax";
// import { ParallaxProvider } from 'react-scroll-parallax';

const Cover = ({ banner, title, info }) => {
    return (
        <div className="py-[100px] lg:py-[200px]" style={{ backgroundImage: `url("${banner}")` }}>
            <ParallaxProvider speed={-10}>

                <div className="max-w-[1100px] mx-auto text-center text-white bg-black opacity-60 py-[145px] rounded-lg">
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    <p className="mb-5">{info}</p>

                </div>

            </ParallaxProvider>
        </div>



    );
};

export default Cover;