import "./CTAButton"

interface CTAButtonProps {
    label: string;
}

export default function CTAButton({label}:CTAButtonProps){
    return(
        <button className="w-md h-[48px] m-10 outline rounded-md bg-[#ef476f] text-white text-lg">{label}</button>
    );
}