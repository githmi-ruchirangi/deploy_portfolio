import { 
    BugAntIcon, 
    CodeBracketIcon, 
    CommandLineIcon, 
    CursorArrowRaysIcon, 
    RocketLaunchIcon, 
    ServerIcon, 
    CubeIcon,
    ShieldCheckIcon
} from "@heroicons/react/16/solid";

interface Props{
    title:string;
    num:string;
    description:string
}

const iconMapping = {
    "01": CommandLineIcon,
    "02": ServerIcon,
    "03": CodeBracketIcon,
    "04": CubeIcon,
    "05": RocketLaunchIcon,
    "06": CursorArrowRaysIcon,
    "07": ShieldCheckIcon,
    "08": BugAntIcon
};

const ServiceCard = ({ num, title, description }: Props) => {
    const IconComponent = (iconMapping as Record<string, React.ElementType>)[num] || CommandLineIcon;

    return (
        <div className="bg-black custom_service z-[100] relative transform rounded-2xl text-center p-6 shadow-md w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <IconComponent className="w-[5rem] relative z-[1] mx-auto h-[5rem] text-yellow-400" />
            <h1 className="text-[25px] relative z-[1] text-white mt-[1rem]">{title}</h1>
            <p className="text-white text-[15px] opacity-60 mt-[0.8rem] text-justify">{description}</p>
            <p className="text-white text-[1.6rem] font-bold absolute top-3 right-4">{num}</p>
        </div>
    );
};

export default ServiceCard;
