import { Slider } from "@material-tailwind/react";

const CostSlider = () => {
    return (
    <div className="my-auto mb-4">
        <Slider defaultValue={30}/>
    </div>
    );
}

export default CostSlider;