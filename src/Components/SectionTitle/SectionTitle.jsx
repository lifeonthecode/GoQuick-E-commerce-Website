
const SectionTitle = ({title, textAlign}) => {
    return (
        <div className={`mb-10 flex items-center w-full ${textAlign ? textAlign : 'justify-center'}`}>
            <h1 className="text-4xl text-[#0f2137] font-semibold capitalize">{title}</h1>
        </div>
    );
};

export default SectionTitle;