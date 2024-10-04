
const HeaderTitle = ({subheading, heading}) => {
    return (
        <div className="text-center md:w-3/12 mx-auto">
            <p className="text-[#D99904] text-xl font-semibold">{subheading}</p>
            <h3 className="text-7xl font-bold text-[##151515] border-y-2 py-2 border-">{heading}</h3>
        </div>
    );
};

export default HeaderTitle;