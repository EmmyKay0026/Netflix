import React from "react";
import { AdultNav } from "../../molecules";
import title from "../../../Asset/movie-title.webp";
import { FaAngleLeft, FaAngleRight, FaInfoCircle, FaPlay, FaThumbsUp } from "react-icons/fa";
import CardImg from "../../../Asset/card-img.jpg";
import CardImg2 from "../../../Asset/card-img2.jpg";
import CardImg3 from "../../../Asset/card-img3.jpg";
import "./home.css";

export const HomeAdults = () => {
    return (
        <>
        <div>
            <img style={{position: "absolute", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",  }} src="https://occ-0-5543-1167.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVk4xIur0E3jyFbckGV3xEDY7PjWG14B4-No0owPK4VSwU54OW5llS4JFbqOjMFB6OYAoz5unKiwqlDzfA5NKkledt789Tk5VwtA.webp?r=031" alt="hero-banner" />
            <AdultNav />
            <div style={{position: "absolute", width: "50%", padding: "0 50px", marginTop: "64px"}}>
            <img style={{width: "85%"}} src={title} alt="hero-title" />
            <p style={{textShadow: "2px 2px 4px rgb(0 0 0 / 45%)", color: "white", width: "85%", marginBottom: "32px"}}>
            A TV producer discovers a secret supernatural world as she becomes entangled with a former deity who's spent centuries searching for his lost lover.
            </p>
            <div style={{display: "flex", justifyContent: "space-between"}}>
            <div style={{display: "flex", gap: "16px"}}>
            <button style={{display: "flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontWeight: "bold", fontSize: "1rem", borderRadius: "5px", border: "none"}}><FaPlay /> Play</button>
            <button style={{display: "flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontWeight: "bold", fontSize: "1rem", borderRadius: "5px", backgroundColor: "rgba(109, 109, 110, 0.7)", color: "white", border: "none"}}><FaInfoCircle /> More Info</button>
            </div>
            <p style={{color: "white", position: "absolute", right: "-630px", backgroundColor: "rgba(51,51,51,.6)", width: "70px", padding: "5px", border: "3px #dcdcdc", borderLeftStyle: "solid"}}>18+</p>
            </div>
            </div>
        </div>
        <div style={{width: "100%", paddingLeft: "50px", height: "25vh",}}>
            <div style={{width: "100%", position: "relative", marginTop: "500px", }}>
            <p style={{color: "white", marginTop: "50px", fontSize: "1.2rem"}}>Bingeworthy TvShows</p>
            <div style={{display: "flex", gap: "8px", overflow: "hidden", width: "100%"}}>
            <div className="grid-card" style={{width: "100%"}}>
                <img style={{width: "100%",backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px"}} src={CardImg3} alt="" />
                <div>
                    <FaPlay />
                    <FaThumbsUp />
                </div>
            </div>
            <div style={{width: "100%"}}>
                <img style={{width: "100%",backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px"}} src={CardImg} alt="" />
            </div>
            <div style={{width: "100%"}}>
                <img style={{width: "100%", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px"}}src={CardImg2} alt="" />
            </div>
            <div style={{width: "100%"}}>
                <img style={{width: "100%", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px"}}src={CardImg3} alt="" />
            </div>
            <div style={{width: "100%"}}>
                <img style={{width: "100%", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px"}}src={CardImg} alt="" />
            </div>
            <div style={{width: "100%", marginRight: "-200px"}}>
                <img style={{width: "100%",backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px"}}src={CardImg2} alt="" />
            </div>
            </div>
            </div>
            <div style={{position: "relative", color: "white", display: "none", justifyContent: "space-between", fontSize: "3rem", marginTop: "-100px"}}>
            <FaAngleLeft />
            <FaAngleRight />
            </div>
        </div>
        <div style={{width: "100%", padding: "0px 50px", height: "25vh",}}>
            <div style={{width: "100%", position: "relative", marginTop: "50px", }}>
            <p style={{color: "white", marginTop: "50px", fontSize: "1.2rem"}}>Trending Now</p>
            <div style={{display: "flex", gap: "4px", overflow: "hidden", width: "fit-content"}}>
            <img style={{width: "20%", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px" }} src={CardImg} alt="" />
            <img style={{width: "20%", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px"}} src={CardImg3} alt="" />
            <img style={{width: "20%", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px"}}src={CardImg2} alt="" />
            <img style={{width: "20%", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px"}}src={CardImg} alt="" />
            <img style={{width: "20%", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px"}}src={CardImg2} alt="" />
            <img style={{width: "20%", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px"}}src={CardImg3} alt="" />
            <img style={{width: "20%", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px"}}src={CardImg} alt="" />
            </div>
            </div>
            <div style={{position: "relative", color: "white", display: "flex", justifyContent: "space-between", fontSize: "3rem", marginTop: "-90px"}}>
            <FaAngleLeft />
            <FaAngleRight />
            </div>
        </div>
        <div style={{width: "100%", padding: "0px 50px", height: "25vh",}}>
            <div style={{width: "100%", position: "relative", marginTop: "50px", }}>
            <p style={{color: "white", marginTop: "50px", fontSize: "1.2rem"}}>Top 10 TV Shows in Nigeria Today</p>
            <div style={{display: "flex", gap: "4px", overflow: "hidden", width: "fit-content"}}>
            <img style={{width: "20%", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px" }} src={CardImg} alt="" />
            <img style={{width: "20%", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px"}} src={CardImg2} alt="" />
            <img style={{width: "20%", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px"}}src={CardImg3} alt="" />
            <img style={{width: "20%", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px"}}src={CardImg} alt="" />
            <img style={{width: "20%", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px"}}src={CardImg2} alt="" />
            <img style={{width: "20%", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px"}}src={CardImg3} alt="" />
            <img style={{width: "20%", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px"}}src={CardImg} alt="" />
            </div>
            </div>
            <div style={{position: "relative", color: "white", display: "flex", justifyContent: "space-between", fontSize: "3rem", marginTop: "-90px"}}>
            <FaAngleLeft />
            <FaAngleRight />
            </div>
        </div>
        <div style={{width: "100%", padding: "0px 50px", height: "25vh",}}>
            <div style={{width: "100%", position: "relative", marginTop: "50px", }}>
            <p style={{color: "white", marginTop: "50px", fontSize: "1.2rem"}}>Retro TV</p>
            <div style={{display: "flex", gap: "4px", overflow: "hidden", width: "fit-content"}}>
            <img style={{width: "20%", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px" }} src={CardImg3} alt="" />
            <img style={{width: "20%", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px"}} src={CardImg2} alt="" />
            <img style={{width: "20%", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px"}}src={CardImg} alt="" />
            <img style={{width: "20%", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px"}}src={CardImg3} alt="" />
            <img style={{width: "20%", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px"}}src={CardImg} alt="" />
            <img style={{width: "20%", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px"}}src={CardImg2} alt="" />
            <img style={{width: "20%", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px"}}src={CardImg3} alt="" />
            </div>
            </div>
            <div style={{position: "relative", color: "white", display: "flex", justifyContent: "space-between", fontSize: "3rem", marginTop: "-90px"}}>
            <FaAngleLeft />
            <FaAngleRight />
            </div>
        </div>
        <div style={{width: "100%", padding: "0px 50px", height: "25vh",}}>
            <div style={{width: "100%", position: "relative", marginTop: "50px", }}>
            <p style={{color: "white", marginTop: "50px", fontSize: "1.2rem"}}>TV Thrillers</p>
            <div style={{display: "flex", gap: "4px", overflow: "hidden", width: "fit-content"}}>
            <img style={{width: "20%", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px" }} src={CardImg3} alt="" />
            <img style={{width: "20%", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px"}} src={CardImg} alt="" />
            <img style={{width: "20%", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px"}}src={CardImg2} alt="" />
            <img style={{width: "20%", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px"}}src={CardImg3} alt="" />
            <img style={{width: "20%", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px"}}src={CardImg} alt="" />
            <img style={{width: "20%", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px"}}src={CardImg2} alt="" />
            <img style={{width: "20%", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px"}}src={CardImg3} alt="" />
            </div>
            </div>
            <div style={{position: "relative", color: "white", display: "flex", justifyContent: "space-between", fontSize: "3rem", marginTop: "-90px"}}>
            <FaAngleLeft />
            <FaAngleRight />
            </div>
        </div>
        </>
    );
}