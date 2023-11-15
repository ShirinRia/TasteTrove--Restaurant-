

const Sectiontitle = ({heading,subheading}) => {
    return (
        <div className="md:w-5/12 mx-auto text-center my-8">
            <p className="text-yellow-600 my-4">{subheading}</p>
            <h3 className="uppercase text-4xl border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default Sectiontitle;