import Typical from 'react-typical';


function TypeWriter() {
    return (
        <span className="font-poppins text-gray-800"><Typical
            loop={2}
            wrapper="span"
            steps={[
                2250,
                ' experiences.',
                4000,
                ' interfaces.',
                4000,
                ' websites.',
                6000
            ]}
        /></span>
    );
}

export default TypeWriter;