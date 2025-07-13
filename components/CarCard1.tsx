"use client";

import { TempProps } from "../types";
import { motion } from "framer-motion";

interface CarCardProps {
    temp: TempProps;
}

const CarCard = ({ temp }: CarCardProps) => {
    const {  img } = temp;

    return (
        
            <div className="br_grid br_grid-cols-1 supports-subgrid:br_row-span-4 supports-subgrid:br_grid-rows-[subgrid]">
                <div className="Layout br_contents">
                    <center>
                        <span className="br_contents br_edition-">
                            <div className="">
                                <div className="initial:br_row-span-1 br_col-start-1 br_row-start-1 br_relative">
                                    <div className="br_aspect-[1/1] sm:br_aspect-square">
                                        <div className="br_w-full br_h-full br_relative br_flex br_items-center br_justify-center">
                                             
                                            
                                                                    <div className="relative inline-block w-[300px] h-[300px]">
                          <img
                            src={img[0]}
                            alt="Default"
                            className="w-full h-full object-cover object-center rounded"
                          />

                     

                        </div>
                                        </div>

                                    </div>
                                </div> 
                            </div>
                        </span>
                    </center>
                </div>
            </div> 
    );
}

export default CarCard;
