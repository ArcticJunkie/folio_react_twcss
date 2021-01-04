import Typical from 'react-typical';

function TypeWriter() {
    return (
        <span className=" font-poppins"><Typical
            loop={2}
            wrapper="n"
            steps={[
                2250,
                ' experiences.',
                2250,
                ' interfaces.',
                2250,
                ' websites.',
                6000
            ]}
        /></span>
    );
}

export default TypeWriter;